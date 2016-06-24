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
});
