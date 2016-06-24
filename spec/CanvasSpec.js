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
    expect(piece.blocks[3].drow).toEqual(2);
    expect(piece.blocks[3].dcol).toEqual(2);
    expect(piece.blocks[3].row).toEqual(12);
    expect(piece.blocks[3].col).toEqual(12);
    canvas.addPiece(piece);
    //debugger;
    expect(canvas.blocks[3].drow).toEqual(2);
    expect(canvas.blocks[3].dcol).toEqual(2);
    expect(canvas.blocks[3].row).toEqual(12);
    expect(canvas.blocks[3].col).toEqual(12);
  });

  it("should collide under certain conditions", function() {
    canvas.addPiece(piece);
    piece.moveDown();
    piece.moveDown();
    expect(canvas.collision(piece)).toEqual(true);
    piece.moveDown();
    expect(canvas.collision(piece)).toEqual(false);
  });
});
