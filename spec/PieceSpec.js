describe("Piece", function() {
  var piece;

  beforeEach(function() {
    piece = new Piece(10, 12, 0);
  });

  it("should have 4 cells", function() {
    expect(piece.cells.length).toEqual(4);
  });
});
