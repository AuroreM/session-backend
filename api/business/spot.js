import SpotDB from '../db/queryBuilders/spot';

class Spot {
  static async load(ctx, args) {
    return await SpotDB.getById(args.id);
  }

  static async loadAll(ctx, args) {
    return await SpotDB.getAll();
  }
}

export default Spot;
