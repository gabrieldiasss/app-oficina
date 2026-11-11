import "reflect-metadata";
import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { buildSchema } from "type-graphql";
import { ClientResolver } from "./resolver/client.resolver.js";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ClientResolver],
    validate: false,
  });

  const server = new ApolloServer({ schema });
  await server.start();

  const app = express();

  // Em desenvolvimento o Apollo Server exibe o Apollo Sandbox em GET /graphql
  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(4000, () => {
    console.log("GraphQL server em http://localhost:4000/graphql");
  });
}

bootstrap();
