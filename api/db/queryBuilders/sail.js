import db from '..';

class Sail {
  static async getById(id: number) {
    return db
      .first()
      .table('Sails')
      .where('id', id);
  }
  static async getByIds(ids: Array<number>) {
    return db
      .select()
      .table('Sails')
      .whereIn('id', ids);
  }
  static async getAll() {
    return db.select().table('Sails');
  }
}
export default Sail;
