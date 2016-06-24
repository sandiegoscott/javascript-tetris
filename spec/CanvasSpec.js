describe("A canvas", function() {
  var canvas;
  var piece;

  beforeEach(function() {
    var style = 'height: 299px; width: 150px; border: 1px solid #333; background-color: aqua;';
    var el = document.createElement('div');
    el.setAttribute('style', style);
    canvas = new Canvas(el, 20, 10);
    piece = new Piece(canvas, 5, 1, 0);
  });

  it("should have the proper blocks occupied after a piece is added", function() {
    canvas.addPiece(piece);
    expect(canvas.blocks.length).toEqual(4);
    expect(canvas.blocks[3]).toEqual(piece.blocks[3]);
  });

  it("should collide under certain conditions", function() {
    canvas.addPiece(piece);
    piece = new Piece(canvas, 2, 1, 0);
    expect(canvas.collision(piece)).toEqual(false);
    piece.moveDown();
    expect(canvas.collision(piece)).toEqual(true);
  });

  it("should go out of bounds under certain conditions", function() {
    expect(canvas.out_of_bounds(piece)).toEqual(false);
    piece.moveLeft();
    expect(canvas.out_of_bounds(piece)).toEqual(false);
    piece.moveLeft();
    expect(canvas.out_of_bounds(piece)).toEqual(false);
    piece.moveLeft();
    expect(canvas.out_of_bounds(piece)).toEqual(true);
  });
});
