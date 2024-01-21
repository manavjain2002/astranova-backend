import dotenv from "dotenv";
dotenv.config()
import http, { Server } from "http";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import cors from "cors";
import * as db from "./database/db";
import { MyContext } from "./utils/interfaces";

const app: express.Express = express();

const httpServer: Server = http.createServer(app);

const apolloServer: ApolloServer = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginDrainHttpServer({httpServer})
    ]
})

async function main() {
    // start apollo graphql server
    await apolloServer.start();

    // set graphql server as middleware
    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        express.json(),
        expressMiddleware(apolloServer, {
            context: async ({ req }) => ({ token: req.headers.authToken })
        })
      );
      httpServer.listen(8080)
          console.log("Server started listening on http://localhost:8080");
}


app.get("/", (req: express.Request, res: express.Response) => {
    res.send("<h1>Hello from server!!</h1><br><a href='http://localhost:8080/graphql' target='_blank'>GraphQL</a>")
})

main();