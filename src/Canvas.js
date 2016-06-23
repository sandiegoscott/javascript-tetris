function Canvas(id, rows, cols) {
  //
  // hold info about #canvas or #upcoming div
  //
  this.el = get(id);
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
  this.block_height = this.height / this.rows;
  this.block_width = this.width / this.cols;
}
