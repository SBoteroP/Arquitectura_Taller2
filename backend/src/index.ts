// @ts-ignore
import express from 'express';
// @ts-ignore
import { ApolloServer } from 'apollo-server-express';
// @ts-ignore
import { typeDefs } from './graphql/schema';
// @ts-ignore
import { resolvers } from './graphql/resolvers';

const app = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    // @ts-ignore
    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
        console.log(`GraphQL listo en http://localhost:${PORT}${server.graphqlPath}`);
    });
}

startServer();