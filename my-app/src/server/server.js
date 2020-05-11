import { ApolloServer } from "apollo-server-express"

import taskResolver from "./qraphql/resolvers/taskResolver"
import express from "express"
import { connectODM } from "./db/odm"
import TaskDefs from "./qraphql/definition/TaskDefs"
import UserDefs from "./qraphql/definition/UserDefs"
import BaseTypeDefs from "./qraphql/definition/BaseTypeDefs"
import userResolver from "./qraphql/resolvers/userResolver"
import groupResolver from "./qraphql/resolvers/groupResolver"
import GroupDefs from "./qraphql/definition/GroupDefs"
import dotenv from "dotenv";


dotenv.config();

console.log(process.env.REACT_APP_GRAPHQL_PORT);
console.log(process.env.REACT_APP_GRAPHQL_URL);


const start = async () => {


    const graphqlServer = new ApolloServer({ typeDefs: [BaseTypeDefs, GroupDefs, TaskDefs, UserDefs], resolvers: [userResolver, taskResolver, groupResolver] });

    let port = process.env.REACT_APP_GRAPHQL_PORT || 7777;
    let app = express();


    graphqlServer.applyMiddleware({ app });

    await connectODM();

    app.listen({ port }, () => console.info(`Server start listening on port:  ${port} ${graphqlServer.graphqlPath}`));
}


start();

