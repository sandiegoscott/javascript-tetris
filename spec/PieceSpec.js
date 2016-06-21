describe("Piece", function() {
  var piece;

  beforeEach(function() {
    piece = new Piece(10, 12, 0);
  });

  it("should have 4 cells", function() {
    expect(piece.cells.length).toEqual(4);
  });

  it("should have a particular 3rd cell", function() {
    expect(piece.cells[3].row_dif).toEqual(2);
    expect(piece.cells[3].col_dif).toEqual(1);
    expect(piece.cells[3].row).toEqual(12);
    expect(piece.cells[3].col).toEqual(13);
  });

  it("should rotate cells properly", function() {
    piece.rotate();
    expect(piece.cells[3].row_dif).toEqual(1);
    expect(piece.cells[3].col_dif).toEqual(2);
    expect(piece.cells[3].row).toEqual(11);
    expect(piece.cells[3].col).toEqual(14);
  });
});
