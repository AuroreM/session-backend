import SailDB from '../db/queryBuilders/sail';

class Sail {
  id: number;
  name: string;
  wind: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.wind = data.wind;
  }

  static async load(ctx, args) {
    const data = await SailDB.getById(args.id);
    if (!data) return null;

    return new Sail(data);
  }

  static async loadAll(ctx, args) {
    const data = await SailDB.getAll();

    return data.map(row => new Sail(row));
  }
}

export default Sail;
