describe("Display", function() {
  var display;

  beforeEach(function() {
    piece = new Display(20, 15);
  });

  it("should have 3 or 4 offsets", function() {
    expect([3, 4]).toContain(piece.offsets.length);
  });
});
