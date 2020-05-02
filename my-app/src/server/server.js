import { ApolloServer } from "apollo-server-express"
import typeDefs from "./qraphql/definition/typeDefs"
import taskResolver from "./qraphql/resolvers/taskResolver"
import express from "express"
import { connectODM } from "./db/odm"
//const express = require('express');





const start = async () => {


    const graphqlServer = new ApolloServer({ typeDefs, resolvers: taskResolver });

    let port = process.env.PORT || 7777;
    let app = express();


    graphqlServer.applyMiddleware({ app });

    await connectODM();

    app.listen({ port }, () => console.info(`Server start listening on port:  ${port} ${graphqlServer.graphqlPath}`));
}


start();

