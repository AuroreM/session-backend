import db from '..';

class Spot {
  static async getById(id: number) {
    return db
      .first()
      .table('Spots')
      .where('id', id);
  }
  static async getByIds(ids: Array<number>) {
    return db
      .select()
      .table('Spots')
      .whereIn('id', ids);
  }
  static async getAll() {
    return db.select().table('Spots');
  }
}
export default Spot;
