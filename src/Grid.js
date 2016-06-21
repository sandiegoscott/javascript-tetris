function Grid(nrows, ncols) {
  //
  // where pieces arrive, fall, stick, and collide
  //
  this.nrows = nrows;
  this.ncols = ncols;
  this.cells = [ ];
}

// add cells of piece to occupied cells
Grid.prototype.addPiece = function(piece) {
  var cell;
  var new_cell;
  for (i = 0; i < piece.cells.length; i++) {
    cell = piece.cells[i];
    // don't care about relative position of cell
    new_cell = new Cell(0, 0, cell.row, cell.col, cell.size, cell.color);
    this.cells.push(new_cell);
  }
};

// detect collision of piece with occupied cells
Grid.prototype.collision = function(piece) {
    for (i = 0; i < piece.cells.length; i++) {
      cell = piece.cells[i];
      for (j = 0; j < this.cells.length; j++) {
        if (this.cells[j].collision(cell.row, cell.col)) {
          return true;
        }
      }
    }
    return false;
}

// anticipate collision of piece with occupied cells
Grid.prototype.will_collide = function(piece) {
    for (i = 0; i < piece.cells.length; i++) {
      cell = piece.cells[i];
      for (j = 0; j < this.cells.length; j++) {
        if (this.cells[j].collision(cell.row - 1, cell.col)) {
          return true;
        }
      }
    }
    return false;
}
