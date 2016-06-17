describe("Piece", function() {
  var piece;

  beforeEach(function() {
    piece = new Piece();
  });

  it("should have the proper array depth in the patterns", function() {
    var pattern = 0;
    var rotation = 0;
    var cell = 0;
    var dimension = 0;
    x_or_y_value = piece.patterns[pattern][rotation][cell][dimension];
    expect(typeof x_or_y_value).toEqual("number");
  });

  it("should move down properly", function() {
    piece.moveDown();
    expect(piece.position).toEqual(1);
  });
});
