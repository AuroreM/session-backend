import BoardDB from '../db/queryBuilders/board';

class Board {
  id: number;
  name: string;
  type: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
  }

  static async load(ctx, args) {
    const data = await BoardDB.getById(args.id);
    if (!data) return null;

    return new Board(data);
  }

  static async loadAll(ctx, args) {
    const data = await BoardDB.getAll();

    return data.map(row => new Board(row));
  }
}

export default Board;
