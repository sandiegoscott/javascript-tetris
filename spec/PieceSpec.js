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

  it("should move its blocks properly", function() {
    piece.moveDown();
    expect(piece.blocks[3].row).toEqual(13);
    piece.moveRight();
    expect(piece.blocks[3].col).toEqual(13);
    piece.moveLeft();
    expect(piece.blocks[3].col).toEqual(12);
  });

  it("should rotateRight blocks properly", function() {
    piece.rotateRight();
    expect(piece.blocks[0].drow).toEqual(1);
    expect(piece.blocks[0].dcol).toEqual(2);
    piece.rotateRight();
    expect(piece.blocks[0].drow).toEqual(2);
    expect(piece.blocks[0].dcol).toEqual(1);
    piece.rotateRight();
    expect(piece.blocks[0].drow).toEqual(1);
    expect(piece.blocks[0].dcol).toEqual(0);
    piece.rotateRight();
    expect(piece.blocks[0].drow).toEqual(0);
    expect(piece.blocks[0].dcol).toEqual(1);
  });

  it("should rotateLeft blocks properly", function() {
    piece.rotateLeft();
    expect(piece.blocks[0].drow).toEqual(1);
    expect(piece.blocks[0].dcol).toEqual(0);
    piece.rotateLeft();
    expect(piece.blocks[0].drow).toEqual(2);
    expect(piece.blocks[0].dcol).toEqual(1);
    piece.rotateLeft();
    expect(piece.blocks[0].drow).toEqual(1);
    expect(piece.blocks[0].dcol).toEqual(2);
    piece.rotateLeft();
    expect(piece.blocks[0].drow).toEqual(0);
    expect(piece.blocks[0].dcol).toEqual(1);
  });
});
