import { ApolloServer } from "apollo-server-express"

import taskResolver from "./qraphql/resolvers/taskResolver"
import express from "express"
import { connectODM } from "./db/odm"
import TaskDefs from "./qraphql/definition/TaskDefs"
import UserDefs from "./qraphql/definition/UserDefs"
import BaseTypeDefs from "./qraphql/definition/BaseTypeDefs"
import userResolver from "./qraphql/resolvers/userResolver"

//const express = require('express');





const start = async () => {

    //mergeTypeDefs(types, { all: true });

    const graphqlServer = new ApolloServer({ typeDefs: [BaseTypeDefs, TaskDefs, UserDefs], resolvers: [userResolver, taskResolver] });

    let port = process.env.PORT || 7777;
    let app = express();


    graphqlServer.applyMiddleware({ app });

    await connectODM();

    app.listen({ port }, () => console.info(`Server start listening on port:  ${port} ${graphqlServer.graphqlPath}`));
}


start();

