describe("The grid", function() {
  var grid;
  var piece;

  beforeEach(function() {
    grid = new Grid(25, 20);
    piece = new Piece(10, 12, 0);
  });

  it("should have the proper cells occupied after a piece is added", function() {
    piece.rotate();
    piece.rotate();
    piece.rotate();
    grid.addPiece(piece);
    expect(grid.cells[1].row).toEqual(12);
    expect(grid.cells[1].col).toEqual(14);
    expect(grid.cells[3].row).toEqual(11);
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

  it("should anticipate collision under certain conditions", function() {
    // put the piece into the grid, down 4 rows
    piece.moveDown();
    piece.moveDown();
    piece.moveDown();
    piece.moveDown();
    grid.addPiece(piece);
    // check with a new piece
    var piece2;
    piece2 = new Piece(10, 12, 0);
    expect(grid.will_collide(piece2)).toEqual(false);
    piece2.moveDown();
    expect(grid.will_collide(piece2)).toEqual(true);
  });
});
