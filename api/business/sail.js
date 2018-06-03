import SailDB from '../db/queryBuilders/sail';

class Sail {
  static async load(ctx, args) {
    return await SailDB.getById(args.id);
  }

  static async loadAll(ctx, args) {
    return await SailDB.getAll();
  }
}

export default Sail;
