describe("Piece", function() {
  var piece;

  beforeEach(function() {
    piece = new Piece(0);
  });

  it("should move down properly", function() {
    piece.moveDown();
    expect(piece.position).toEqual(1);
  });
});
