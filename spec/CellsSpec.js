describe("Cells", function() {
  var cells;

  beforeEach(function() {
    cells = new Cells();
  });

  it("should move down properly", function() {
    piece.moveDown();
    expect(piece.position).toEqual(1);
  });
});
