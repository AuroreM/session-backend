import BoardDB from '../db/queryBuilders/board';

class Board {
  static async load(ctx, args) {
    return await BoardDB.getById(args.id);
  }

  static async loadAll(ctx, args) {
    return await BoardDB.getAll();
  }
}

export default Board;
