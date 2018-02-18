const mockedBoards = [
  {
    id: 1,
    name: 'JP',
    type: 'waves',
  },
  {
    id: 2,
    name: 'foil',
    type: 'glassy',
  },
];

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
    const data = mockedBoards[args.id];
    if (!data) return null;

    return new Board(data);
  }

  static async loadAll(ctx, args) {
    const data = mockedBoards;

    return data.map(row => new Board(row));
  }
}

export default Board;
