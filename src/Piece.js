function Piece(canvas, row_origin, col_origin, index = null) {
  //
  // Tetris piece
  //
  var drow, dcol, row, col, side, color, offsets, offset, block;

  this.canvas = canvas;
  // select requested or random Tetris piece
  this.index = (index == 0) ? index : Math.floor(Math.random()*Piece.prototype.offsets.length)

  // for shorter code
  offsets = Piece.prototype.offsets[this.index];
  side = Piece.prototype.sides[this.index];
  color = Piece.prototype.colors[this.index];

  // create blocks
  this.blocks = [ ];
  for (i = 0; i < offsets.length; i++) {
    offset = offsets[i];
    drow = offset[0];
    dcol = offset[1];
    row = row_origin + drow;
    col = col_origin + dcol;
    block = new Block(canvas, row, col, color, side, drow, dcol)
    this.blocks.push(block);
  }
}

// movement
Piece.prototype.moveDown = function() {
  for (i = 0; i < this.blocks.length; i++) {
    this.blocks[i].moveDown();
  }
};

Piece.prototype.moveLeft = function() {
  for (i = 0; i < this.blocks.length; i++) {
    this.blocks[i].moveLeft();
  }
};

Piece.prototype.moveRight = function() {
  for (i = 0; i < this.blocks.length; i++) {
    this.blocks[i].moveRight();
  }
};

// rotation
Piece.prototype.rotate = function() {
  for (i = 0; i < this.blocks.length; i++) {
    this.blocks[i].rotate();
  }
};

// ========== data ==========

// data: colors of pieces
Piece.prototype.colors = [ "aqua", "yellow" ];

// data: sides of pieces
Piece.prototype.sides = [ 3, 4 ];

// data: offset from NW corner of each block in piece
Piece.prototype.offsets = [
  [ [0,1], [1,1], [2,1], [2,2] ], // - * -
                                  // - * -
                                  // - * *
  [ [0,1], [1,1], [2,1], [3,1]],  // - * - -
                                  // - * - -
                                  // - * - -
                                  // - * - -
];
