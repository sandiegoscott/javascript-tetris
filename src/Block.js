function Block(canvas, row, col, color, side, drow, dcol) {
  // canvas and position info
  this.canvas = canvas;
  this.row = row;
  this.col = col;
  this.color = color;
  // rotation info
  this.side = side; // 3=3x3  4=4x4
  this.drow = drow; // relative position from NW corner of piece grid
  this.dcol = dcol;

  // create and insert screen element
  this.el = document.createElement('div');
  this.canvas.el.appendChild(this.el); 
  this.display();
}

Block.prototype.removeElement = function() {
  this.canvas.el.removeChild(this.el);
}

Block.prototype.setCanvas = function(canvas, row, col) {
  // use to move block to a different canvas
  this.canvas = canvas;
  this.row = row;
  this.col = col;
  this.display();
}

Block.prototype.display = function() {
  var style = '';
  var top  = this.row * (this.canvas.block_height - 1) - 1;
  var left = this.col * (this.canvas.block_width - 1) - 1;

  style += 'top: ' + top + 'px; ';
  style += 'left: ' + left + 'px; ';
  style += 'height: ' + this.canvas.block_height + 'px; ';
  style += 'width: ' + this.canvas.block_width + 'px; ';
  style += 'border: 1px solid #333; background-color: ' + this.color + ';';
  style += 'position: absolute; box-sizing: border-box;';
  this.el.setAttribute('style', style);
}

// detect collision with this block
Block.prototype.collision = function(row, col) {
  return row == this.row && col == this.col;
}

// movement
Block.prototype.moveDown = function() {
  this.row += 1;
};
Block.prototype.moveRight = function() {
  this.col += 1;
};
Block.prototype.moveLeft = function() {
  this.col -= 1;
};

// helper for rotation
Block.prototype.move = function(row_chg, col_chg) {
  this.row += row_chg;
  this.col += col_chg;
  this.drow += row_chg;
  this.dcol += col_chg;
};

// rotation
Block.prototype.rotate = function() {
  if (this.side == 3) { // rotate 3x3
    // clockwise around the corners from NW
    if      (this.drow == 0 && this.dcol == 0) { this.move( 0,  2); }
    else if (this.drow == 0 && this.dcol == 2) { this.move( 2,  0); }
    else if (this.drow == 2 && this.dcol == 2) { this.move( 0, -2); }
    else if (this.drow == 2 && this.dcol == 0) { this.move(-2,  0); }
    // clockwise around the sides from N
    if      (this.drow == 0 && this.dcol == 1) { this.move( 1,  1); }
    else if (this.drow == 1 && this.dcol == 2) { this.move( 1, -1); }
    else if (this.drow == 2 && this.dcol == 1) { this.move(-1, -1); }
    else if (this.drow == 1 && this.dcol == 0) { this.move(-1,  1); }
  } else {  // (this.side == 4) // rotate 3x3

  }
};
