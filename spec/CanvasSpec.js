describe("A canvas", function() {
  var canvas;
  var piece;

  beforeEach(function() {
    var style = 'height: 299px; width: 150px; border: 1px solid #333; background-color: aqua;';
    var el = document.createElement('div');
    el.setAttribute('style', style);
    canvas = new Canvas(el, 25, 20);
    piece = new Piece(canvas, 10, 10, 0);
  });

  it("should have the proper blocks occupied after a piece is added", function() {
    canvas.addPiece(piece);
    expect(canvas.blocks.length).toEqual(4);
    expect(canvas.blocks[3]).toEqual(piece.blocks[3]);
  });

  it("should collide under certain conditions", function() {
    canvas.addPiece(piece);
    piece = new Piece(canvas, 7, 10, 0);
    expect(canvas.collision(piece)).toEqual(false);
    piece.moveDown();
    expect(canvas.collision(piece)).toEqual(true);
  });
});
