//
// constructor: piece
//

function Piece(row, col, index) {
  // save location
  this.row = row;
  this.col = col;

  // select random Tetris piece
  this.index = index || Math.floor(Math.random()*Piece.prototype.patterns.length)

  // set piece color, initial rotation
  this.color = Piece.prototype.colors[this.index];  // HTML color
  this.rotation = 0;  // 0, 1, 2, 3

  // set offsets
  this.offsets = Piece.prototype.offsets[this.index];
}

Piece.prototype.moveDown = function() {
  this.row += 1;
};

Piece.prototype.moveLeft = function() {
  this.col -= 1;
};

Piece.prototype.moveRight = function() {
  this.col += 1;
};

Piece.prototype.rotate = function() {
  if (this.offsets.length == 3) {
    // rotate 3x3 piece
    for (i = 0; i < this.offsets.length; i++) {
      let offset = this.offsets[i];
      // rotate corners
      if      (offset[0] == 0 && offset[1] == 0) { offset[0] += 2; }
      else if (offset[0] == 2 && offset[1] == 0) { offset[1] += 2; }
      else if (offset[0] == 2 && offset[1] == 2) { offset[0] -= 2; }
      else if (offset[0] == 0 && offset[1] == 2) { offset[1] -= 2; }
      // rotate sides
      if      (offset[0] == 0 && offset[1] == 1) { offset[0] += 1; offset[1] -= 1; }
      else if (offset[0] == 1 && offset[1] == 0) { offset[0] += 1; offset[1] += 1; }
      else if (offset[0] == 2 && offset[1] == 1) { offset[0] -= 1; offset[1] += 1; }
      else if (offset[0] == 1 && offset[1] == 2) { offset[0] -= 1; offset[1] -= 1; }
      // store changes
      this.offsets[i] = offset;
    }
    this.rotation = (this.rotation + 1) % 4;
    // rotate 4x4 piece
  } else {

  }
};

Piece.prototype.colors = [
  "blue", "green"
];

Piece.prototype.offsets = [
  [ [0,1], [1,1], [2,1], [2,2] ], // - * -
                                  // - * -
                                  // - * *
  [ [0,1], [1,1], [2,1], [3,1]],  // - * - -
                                  // - * - -
                                  // - * - -
                                  // - * - -
];
