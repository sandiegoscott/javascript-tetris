function Canvas(el, rows, cols) {
  //
  // hold info about #canvas or #upcoming div
  //
  this.el = el;
  this.height = el.offsetHeight || 299;  // value for testing
  this.width = el.offsetWidth || 150;
  this.rows = rows;
  this.cols = cols;
  this.blocks = [ ];
  this.resize();
}

Canvas.prototype.resize = function() {
  // set dims to physical dims
  this.height = this.el.offsetHeight || this.height;
  this.width = this.el.offsetWidth || this.width;
  // compute size of blocks
  this.block_height = Math.floor(this.height / this.rows) + 1;
  this.block_width  = Math.floor(this.width / this.cols) + 1;
}

// add new block into canvas (for designing only)
Canvas.prototype.addBlock = function(row, col, color) {
  var block = new Block(this, row, col, color); 
  this.blocks.push(block);
}
