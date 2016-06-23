function Canvas(id, rows, cols) {
  //
  // hold info about #canvas or #upcoming div
  //
  this.el = get(id);
  this.rows = rows;
  this.cols = cols;
  this.blocks = [ ];
  this.setupDimensions();
}

Canvas.prototype.setupDimensions = function() {
  // set dims to physical dims
  this.height = this.el.offsetHeight;
  this.width = this.el.offsetWidth;
  // compute size of blocks
  this.block_height = this.height / this.rows;
  this.block_width = this.width / this.rows;
}

// add cells of piece to occupied cells
Canvas.prototype.createBlock = function() {
  var canvas = get('canvas');

  var block = document.createElement('div');
  block.setAttribute('id', 'block');
  block.setAttribute('style', 'height: 25px; width: 25px; border: 1px solid #333; background-color: blue');
  //debugger;
  canvas.appendChild(block); 
}

    function drawBlock(ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x*dx, y*dy, dx, dy);
      ctx.strokeRect(x*dx, y*dy, dx, dy)
    }
