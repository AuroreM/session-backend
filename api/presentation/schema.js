import { makeExecutableSchema } from 'graphql-tools';
import Board from '../business/board';

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
    board(id: Int!): Board
  }

  schema {
    query: Query
  }
`,
];

const resolvers = {
  Query: {
    boards: async (_, args, ctx) => Board.loadAll(ctx, args),
    board: async (_, args, ctx) => Board.load(ctx, args),
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
