import { makeExecutableSchema } from 'graphql-tools';
import Board from '../business/board';
import Sail from '../business/sail';
import Spot from '../business/spot';
import Session from '../business/session';

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
  type Session {
    id: Int!
    sail: Sail
    board: Board
    spot: Spot
  }

  type Query {
    boards: [Board]
    board(id: Int!): Board
    sails: [Sail]
    sail(id: Int!): Sail
    spots: [Spot]
    spot(id: Int!): Spot
    session(id: Int!): Session
    sessions: [Session]
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
    session: async (_, args, ctx) => Session.load(ctx, args),
    sessions: async (_, args, ctx) => Session.loadAll(ctx, args),
  },
  Session: {
    sail: async (session, args, ctx) => Sail.load(ctx, { id: session.sailId }),
    spot: async (session, args, ctx) => Spot.load(ctx, { id: session.spotId }),
    board: async (session, args, ctx) => Board.load(ctx, { id: session.boardId }),
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
