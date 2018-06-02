import SessionDB from '../db/queryBuilders/session';
import Board from './board';
import Spot from './spot';
import Sail from './sail';

class Session {
  id: number;
  spot: Spot;
  sail: Sail;
  board: Boards;

  constructor(data) {
    this.id = data.id;
    this.spot = data.spot;
    this.board = data.board;
    this.sail = data.sail;
  }

  static async load(ctx, args) {
    const data = await SessionDB.getById(args.id);
    if (!data) return null;

    return new Session(data);
  }

  static async loadAll(ctx, args) {
    const data = await SessionDB.getAll();

    return data.map(row => new Session(row));
  }
}

export default Session;
