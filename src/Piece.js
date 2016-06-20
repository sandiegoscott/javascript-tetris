function Piece(row, col, index = null) {
  //
  // actively falling Tetris piece
  //
  var size, color, offsets, offset, position;

  // select requested or random Tetris piece
  this.index = index || Math.floor(Math.random()*Piece.prototype.offsets.length)

  // create cells
  offsets = Piece.prototype.offsets[this.index];
  size = offsets.length;
  color = this.colors[index];
  this.cells = [ ];
  for (i = 0; i < offsets.length; i++) {
    offset = offsets[i];
    position = [offset[0] + row, offset[1] + col];
    cells.push(new Cell(offset, position, size, color));
  }
}

// movement
Piece.prototype.moveDown = function() {
  for (i = 0; i < this.cells.length; i++) {
    this.cells[i].moveDown();
  }
};

Piece.prototype.moveLeft = function() {
  for (i = 0; i < this.cells.length; i++) {
    this.cells[i].moveLeft();
  }
};

Piece.prototype.moveRight = function() {
  for (i = 0; i < this.cells.length; i++) {
    this.cells[i].moveRight();
  }
};

// rotation
Piece.prototype.rotate = function() {
  for (i = 0; i < this.cells.length; i++) {
    this.cells[i].rotate();
  }
};

// ========== data ==========

// data: colors of pieces
Piece.prototype.colors = [
  "blue", "green"
];

// data: sizes of pieces
Piece.prototype.sizes = [
  3, 4
];

// data: offset from SW corner of each block in piece
Piece.prototype.offsets = [
  [ [0,1], [0,2], [1,1], [2,1] ], // - * -
                                  // - * -
                                  // - * *
  [ [0,1], [1,1], [2,1], [3,1]],  // - * - -
                                  // - * - -
                                  // - * - -
                                  // - * - -
];
