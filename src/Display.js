function Display(nrows, ncols) {
  //
  // display where pieces collide and stick
  //
  this.nrows = nrows;
  this.ncols = ncols;
  this.cells = [ ];
}

// add cells of piece to occupied cells
Piece.prototype.addPiece = function(piece) {
  for (i = 0; i < piece.cells.length; i++) {
    occupied.push(piece.cells[i]);
  }
};

// detect collision of piece with occupied cells
Piece.prototype.collision = function(piece) {
    for (i = 0; i < piece.cells.length; i++) {
      cell = piece.cells[i];
      for (j = 0; j < this.cells.length; j++) {
        if (this.cells[j].collision(cell.row, cell.col)) {
          return true;
        }
    }
    return false;
}
