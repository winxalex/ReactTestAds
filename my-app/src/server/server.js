import { ApolloServer } from "apollo-server-express"
import typeDefs from "./qraphql/definition/typeDefs"
import taskResolver from "./qraphql/resolvers/taskResolver"
import express from "express"
import { getODM } from "./db/models/odm"
//const express = require('express');
const graphqlServer = new ApolloServer({ typeDefs, taskResolver });

//const typeDefs = require("./qraphql/definition/typeDefs");
let port = process.env.PORT || 7777;
let app = express();

graphqlServer.applyMiddleware({ app });

getODM();

app.listen({ port }, () => console.info(`Server start listening on port:  ${port} ${graphqlServer.graphqlPath}`));
console.log("Server !!!");

