function Canvas(el, rows, cols) {
  //
  // hold info about #canvas or #upcoming div
  //
  this.el = el;
  this.rows = rows;
  this.cols = cols;
  this.blocks = [ ];
  this.resize();
}

Canvas.prototype.resize = function() {
  // set dims to physical dims
  this.height = this.el.offsetHeight;
  this.width = this.el.offsetWidth;
  // compute size of blocks
  this.block_height = Math.floor(this.height / this.rows) + 1;
  this.block_width  = Math.floor(this.width / this.cols) + 1;
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

// adds blocks of piece into canvas
// !! IMPORTANT !! no new blocks are created!
Canvas.prototype.addPiece = function(piece) {
  piece.blocks.map( (block) => { this.blocks.push(block); } );
}
