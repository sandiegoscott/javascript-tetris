function Cell(row_dif, col_dif, row, col, size, color) {
  //
  // cell - belongs to piece or display
  //
  this.row_dif = row_dif; // 3x3 or 4x4
  this.col_dif = col_dif;
  this.row = row;
  this.col = col;
  this.size = size;   // 3 or 4
  this.color = color; // "#346a4f"
}

// detect collision with this cell
Cell.prototype.collision = function(row, col) {
  return row == this.row && col == this.col;
}

// movement
Cell.prototype.moveDown = function() {
  this.row -= 1;
};
Cell.prototype.moveRight = function() {
  this.col += 1;
};
Cell.prototype.moveLeft = function() {
  this.col -= 1;
};
Cell.prototype.move = function(row_chg, col_chg) {
  this.row += row_chg;
  this.col += col_chg;
  this.row_dif += row_chg; // 3x3 or 4x4
  this.col_dif += col_chg;

};

// rotation
Cell.prototype.rotate = function() {
  if (this.size == 3) { // rotate 3x3
    // if a corner--
    if      (this.row_dif == 0 && this.col_dif == 0) { this.move( 2,  0); }
    else if (this.row_dif == 2 && this.col_dif == 0) { this.move( 0,  2); }
    else if (this.row_dif == 2 && this.col_dif == 2) { this.move(-2,  0); }
    else if (this.row_dif == 0 && this.col_dif == 2) { this.move( 0, -2); }
    // if a side--
    if      (this.row_dif == 1 && this.col_dif == 0) { this.move( 1,  1); }
    else if (this.row_dif == 2 && this.col_dif == 1) { this.move(-1,  1); }
    else if (this.row_dif == 1 && this.col_dif == 2) { this.move(-1, -1); }
    else if (this.row_dif == 0 && this.col_dif == 1) { this.move( 1, -1); }
  } else {  // (this.size == 4) // rotate 3x3

  }
};
