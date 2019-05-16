import "reflect-metadata";  // required to typeorm work

import {readFileSync} from 'fs';

import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
// import { buildSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { createConnection } from 'typeorm'


import { resolvers } from './resolvers';

// Construct a schema, using GraphQL schema language
const schema = makeExecutableSchema({
  typeDefs: readFileSync('documents/schema.graphql', 'utf8'),
  resolvers: resolvers as any
});

const PORT = 8008;

const main = async () => {
  const connection = await createConnection({
    // FIXME:
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [
        __dirname + "/entities/*.ts"
    ],
    synchronize: true,
    logging: false
  });

  const app = express();
  app.get('/', (req, res) => res.send('Hello World!'))
  app.use('/graphql', graphqlHTTP({
    schema,
    context: { connection, startTime: Date.now() },
    graphiql: true,
  }));
  app.listen(PORT);
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
};

main();