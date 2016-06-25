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

// display
Piece.prototype.display = function() {
  this.blocks.map( (block) => { block.display(); } );
}
// movement
Piece.prototype.moveUp = function() {
  this.blocks.map( (block) => { block.moveUp(); } );
};
Piece.prototype.moveDown = function() {
  this.blocks.map( (block) => { block.moveDown(); } );
};
Piece.prototype.moveLeft = function() {
  this.blocks.map( (block) => { block.moveLeft(); } );
};
Piece.prototype.moveRight = function() {
  this.blocks.map( (block) => { block.moveRight(); } );
};

// rotation
Piece.prototype.rotateRight = function() {
  this.blocks.map( (block) => { block.rotateRight(); } );
};
Piece.prototype.rotateLeft = function() {
  this.blocks.map( (block) => { block.rotateLeft(); } );
};

// detect collision with blocks of canvas
Piece.prototype.collision = function() {
  for (i = 0; i < this.blocks.length; i++) {
    let block = this.blocks[i];
    for (j = 0; j < canvas.blocks.length; j++) {
      if (canvas.blocks[j].collision(block.row, block.col)) {
        return true;
      }
    }
  }
  return false;
}

// detect out of bounds
Piece.prototype.outOfBounds = function() {
  for (i = 0; i < this.blocks.length; i++) {
    let block = this.blocks[i];
    if (block.col < 0 || block.col > self.cols - 1) { return true; }
  }
  return false;
}

// detect end of canvas
Piece.prototype.endOfCanvas = function() {
  for (i = 0; i < this.blocks.length; i++) {
    let block = this.blocks[i];
    if (block.row > this.canvas.rows - 1) { return true; }
  }
  return false;
}

// add blocks of piece into canvas
// !! IMPORTANT !! no new blocks are created!
Piece.prototype.addToCanvas = function() {
  this.blocks.map( (block) => { canvas.blocks.push(block); } );
}

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
