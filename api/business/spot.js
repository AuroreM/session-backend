import SpotDB from '../db/queryBuilders/spot';

class Spot {
  id: number;
  name: string;
  latitude: number;
  longitude: number;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
  }

  static async load(ctx, args) {
    const data = await SpotDB.getById(args.id);
    if (!data) return null;

    return new Spot(data);
  }

  static async loadAll(ctx, args) {
    const data = await SpotDB.getAll();

    return data.map(row => new Spot(row));
  }
}

export default Spot;
