import db from '..';

class Session {
  static async getById(id: number) {
    return db
      .first()
      .table('Sessions')
      .where('id', id);
  }
  static async getByIds(ids: Array<number>) {
    return db
      .select()
      .table('Sessions')
      .whereIn('id', ids);
  }
  static async getAll() {
    return db.select().table('Sessions');
  }
}
export default Session;
