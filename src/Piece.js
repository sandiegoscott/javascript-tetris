function Piece(rr, cc, index = null) {
  //
  // actively falling Tetris piece
  //
  var row_dif, col_dif, row, col, size, color, offsets, offset, cell;

  // select requested or random Tetris piece
  this.index = index || Math.floor(Math.random()*Piece.prototype.offsets.length)

  // create cells
  offsets = Piece.prototype.offsets[this.index];
  console.log("1111");
  size = offsets.length;
  color = Piece.prototype.colors[this.index];
  this.cells = [ ];
  for (i = 0; i < offsets.length; i++) {
    console.log(i);
    offset = offsets[i];
    console.log(offset);
    row_dif = offset[0];
    col_dif = offset[1];
    row = row_dif + rr;
    col = col_dif + cc;
    console.log("2222");
    cell = new Cell(row_dif, col_dif, row, col, size, color);
    console.log("3333");
    this.cells.push(cell);
    console.log("4444");
    console.log(this.cells.length)
    console.log("5555");
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
