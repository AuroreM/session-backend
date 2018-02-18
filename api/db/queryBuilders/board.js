import db from '..';

class Board {
  static async getById(id: number) {
    return db
      .first()
      .table('Boards')
      .where('id', id);
  }
  static async getByIds(ids: Array<number>) {
    return db
      .select()
      .table('Boards')
      .whereIn('id', ids);
  }
  static async getAll() {
    return db.select().table('Boards');
  }
}
export default Board;
