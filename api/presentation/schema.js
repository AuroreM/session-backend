import { makeExecutableSchema } from 'graphql-tools';
import Board from '../business/board';
import Sail from '../business/sail';
import Spot from '../business/spot';

const typeDefs = [
  `
  type Board {
    id: Int!
    name: String
    type: String
  }
  type Sail {
    id: Int!
    name: String
    wind: Int
  }
  type Spot {
    id: Int!
    name: String
    latitude: Float
    longitude: Float
  }

  type Query {
    boards: [Board]
    board(id: Int!): Board
    sails: [Sail]
    sail(id: Int!): Sail
    spots: [Spot]
    spot(id: Int!): Spot
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
    sails: async (_, args, ctx) => Sail.loadAll(ctx, args),
    sail: async (_, args, ctx) => Sail.load(ctx, args),
    spots: async (_, args, ctx) => Spot.loadAll(ctx, args),
    spot: async (_, args, ctx) => Spot.load(ctx, args),
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
