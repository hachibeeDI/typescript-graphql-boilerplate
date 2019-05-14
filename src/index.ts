import {readFileSync} from 'fs';

import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
// import { buildSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

// Construct a schema, using GraphQL schema language
const schema = makeExecutableSchema({
  typeDefs: readFileSync('documents/schema.graphql', 'utf8'),
  resolvers: resolvers as any
});

const PORT = 8008;

var app = express();
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
