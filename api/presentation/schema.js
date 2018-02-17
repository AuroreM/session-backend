import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = [
  `
  type Board {
    id: Int!
    name: String
    type: String
  }

  enum BoardType {
    board
  }

  type Query {
    boards: [Board]
  }

  schema {
    query: Query
  }
`,
];

const resolvers = {
  Query: {
    boards: () => [
      {
        id: 1,
        name: 'JP',
        type: 'waves',
      },
      {
        id: 2,
        name: 'foil',
        type: 'glassy',
      },
    ],
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
