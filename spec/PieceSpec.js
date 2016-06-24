describe("A piece", function() {
  var piece;

  beforeEach(function() {
    var style = 'height: 299px; width: 150px; border: 1px solid #333; background-color: aqua;';
    var el = document.createElement('div');
    el.setAttribute('style', style);
    canvas = new Canvas(el, 20, 10);
    piece = new Piece(canvas, 5, 1, 0);
  });

  it("should have 4 blocks", function() {
    expect(piece.blocks.length).toEqual(4);
  });

  it("should have a particular 4th cell", function() {
    expect(piece.blocks[3].drow).toEqual(2);
    expect(piece.blocks[3].dcol).toEqual(2);
    expect(piece.blocks[3].row).toEqual(7);
    expect(piece.blocks[3].col).toEqual(3);
  });

  it("should move its blocks properly", function() {
    expect(piece.blocks[3].row).toEqual(7);
    expect(piece.blocks[3].col).toEqual(3);
    piece.moveDown();
    expect(piece.blocks[3].row).toEqual(8);
    piece.moveRight();
    expect(piece.blocks[3].col).toEqual(4);
    piece.moveLeft();
    expect(piece.blocks[3].col).toEqual(3);
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

  it("should collide under certain conditions", function() {
    piece.addToCanvas();
    piece = new Piece(canvas, 2, 1, 0);
    expect(piece.collision()).toEqual(false);
    piece.moveDown();
    expect(piece.collision()).toEqual(true);
  });

  it("should go out of bounds under certain conditions", function() {
    expect(piece.outOfBounds()).toEqual(false);
    piece.moveLeft();
    expect(piece.outOfBounds()).toEqual(false);
    piece.moveLeft();
    expect(piece.outOfBounds()).toEqual(false);
    piece.moveLeft();
    expect(piece.outOfBounds()).toEqual(true);
  });

  it("should have its blocks in the canvas after being added there", function() {
    piece.addToCanvas();
    expect(canvas.blocks.length).toEqual(4);
    expect(canvas.blocks[3]).toEqual(piece.blocks[3]);
  });
});
