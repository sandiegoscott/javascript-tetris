describe("The grid", function() {
  var grid;
  var piece;

  beforeEach(function() {
    canvas = { };
    grid = new Grid(canvas, 25, 20);
    piece = new Piece(canvas, 10, 10, 0);
  });

  it("should have the proper cells occupied after a piece is added", function() {
    expect(piece.cells[3].row_dif).toEqual(2);
    expect(piece.cells[3].col_dif).toEqual(2);
    expect(piece.cells[3].row).toEqual(12);
    expect(piece.cells[3].col).toEqual(12);
    grid.addPiece(piece);
    //debugger;
    expect(grid.cells[3].row_dif).toEqual(2);
    expect(grid.cells[3].col_dif).toEqual(2);
    expect(grid.cells[3].row).toEqual(12);
    expect(grid.cells[3].col).toEqual(12);
  });

  it("should collide under certain conditions", function() {
    grid.addPiece(piece);
    piece.moveDown();
    piece.moveDown();
    expect(grid.collision(piece)).toEqual(true);
    piece.moveDown();
    expect(grid.collision(piece)).toEqual(false);
  });
});
