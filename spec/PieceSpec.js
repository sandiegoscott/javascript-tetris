describe("A piece", function() {
  var piece;

  beforeEach(function() {
    canvas = { el: document.createElement('div') };
    piece = new Piece(canvas, 10, 10, 0);
  });

  it("should have 4 blocks", function() {
    expect(piece.blocks.length).toEqual(4);
  });

  it("should have a particular 4th cell", function() {
    expect(piece.blocks[3].drow).toEqual(2);
    expect(piece.blocks[3].dcol).toEqual(2);
    expect(piece.blocks[3].row).toEqual(12);
    expect(piece.blocks[3].col).toEqual(12);
  });

  it("should rotate blocks properly", function() {
    piece.rotate();
    expect(piece.blocks[0].drow).toEqual(1);
    expect(piece.blocks[0].dcol).toEqual(2);
    piece.rotate();
    expect(piece.blocks[0].drow).toEqual(2);
    expect(piece.blocks[0].dcol).toEqual(1);
    piece.rotate();
    expect(piece.blocks[0].drow).toEqual(1);
    expect(piece.blocks[0].dcol).toEqual(0);
    piece.rotate();
    expect(piece.blocks[0].drow).toEqual(0);
    expect(piece.blocks[0].dcol).toEqual(1);
  });
});
