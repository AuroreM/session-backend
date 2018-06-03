import SessionDB from '../db/queryBuilders/session';
import Board from './board';
import Spot from './spot';
import Sail from './sail';

class Session {
  static async load(ctx, args) {
    return await SessionDB.getById(args.id);
  }

  static async loadAll(ctx, args) {
    return await SessionDB.getAll();
  }
}

export default Session;
