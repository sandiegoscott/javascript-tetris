describe("A piece", function() {
  var piece;

  beforeEach(function() {
    canvas = { };
    piece = new Piece(canvas, 10, 10, 0);
  });

  it("should have 4 cells", function() {
    expect(piece.cells.length).toEqual(4);
  });

  it("should have a particular 4th cell", function() {
    expect(piece.cells[3].row_dif).toEqual(2);
    expect(piece.cells[3].col_dif).toEqual(2);
    expect(piece.cells[3].row).toEqual(12);
    expect(piece.cells[3].col).toEqual(12);
  });

  it("should rotate cells properly", function() {
    piece.rotate();
    expect(piece.cells[0].row_dif).toEqual(1);
    expect(piece.cells[0].col_dif).toEqual(2);
    piece.rotate();
    expect(piece.cells[0].row_dif).toEqual(2);
    expect(piece.cells[0].col_dif).toEqual(1);
    piece.rotate();
    expect(piece.cells[0].row_dif).toEqual(1);
    expect(piece.cells[0].col_dif).toEqual(0);
    piece.rotate();
    expect(piece.cells[0].row_dif).toEqual(0);
    expect(piece.cells[0].col_dif).toEqual(1);
  });
});
