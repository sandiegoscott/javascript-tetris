describe("Piece", function() {
  var piece;

  beforeEach(function() {
    piece = new Piece(0, 10);
  });

  it("should have 3 or 4 offsets", function() {
    expect([3, 4]).toContain(piece.offsets.length);
  });

  it("should move down properly", function() {
    row = piece.row
    piece.moveDown();
    expect(piece.row).toEqual(row + 1);
  });

  it("should move right properly", function() {
    col = piece.col
    piece.moveRight();
    expect(piece.col).toEqual(col + 1);
  });

  it("should move left properly", function() {
    col = piece.col
    piece.moveLeft();
    expect(piece.col).toEqual(col - 1);
  });
});
