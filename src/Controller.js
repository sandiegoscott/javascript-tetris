function start() {
  var i;

  field_el = document.getElementById('field');
  on_deck_el = document.getElementById('on_deck');
  field = new Canvas(field_el, 20, 10);
  on_deck = new Canvas(on_deck, 6, 6);
  
  piece1 = new Piece(field, 0, 5, 0);
  piece2 = new Piece(on_deck, 1, 1, 0);

  window.setInterval(function () {
    piece1.display();
    piece2.display();

    piece1.moveDown();
    piece2.rotateRight();
  }, 800); // repeat forever, polling every 3 seconds


  /*
  for (i = 0; i < 16; i += 1) {
    field.addBlock(i, Math.floor(i/2), 'aqua');
    field.addBlock(i, Math.floor(i/2)+1, 'yellow');
    field.addBlock(i, Math.floor(i/2)+2, 'springgreen');
  }
  for (j = 0; j < 6; j += 1) {
    on_deck.addBlock(j, Math.floor(j/2), 'aqua');
    on_deck.addBlock(j, Math.floor(j/2)+1, 'yellow');
    on_deck.addBlock(j, Math.floor(j/2)+2, 'springgreen');
  }
*/
}

window.onload = function() {
  start();
}