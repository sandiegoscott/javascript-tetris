function Canvas(el, rows, cols) {
  //
  // hold info about #canvas or #upcoming div
  //
  this.el = el;
  this.rows = rows;
  this.cols = cols;
  this.setDimensions();
  this.blocks = [ ];
}

Canvas.prototype.setDimensions = function() {
  // set dims to physical dims
  this.height = this.el.offsetHeight;
  this.width = this.el.offsetWidth;
  // compute size of blocks
  this.block_height = Math.floor(this.height / this.rows) + 1;
  this.block_width  = Math.floor(this.width / this.cols) + 1;
}

Canvas.prototype.addBlock = function(row, col, color) {
  var block = new Block(this, row, col, color); 
  this.blocks.push(block);
}

// detect collision of piece with blocks of canvas
Canvas.prototype.collision = function(piece) {
    for (i = 0; i < piece.blocks.length; i++) {
      block = piece.blocks[i];
      for (j = 0; j < this.blocks.length; j++) {
        if (this.blocks[j].collision(block.row, block.col)) {
          return true;
        }
      }
    }
    return false;
}

// add blocks of piece to occupied blocks
Canvas.prototype.addPiece = function(piece) {
  var block;
  var new_block;
  for (i = 0; i < piece.blocks.length; i++) {
    block = piece.blocks[i];
    // don't care about relative position of block
    new_block = new Block(this, block.row, block.col, block.color, block.side, block.drow, block.dcol);
    this.blocks.push(new_block);
  }
}
