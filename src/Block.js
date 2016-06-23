function Block(canvas, row, col, color) {
  //
  // a block for each cell
  //
  this.canvas = canvas;
  this.row = row;
  this.col = col;
  this.color = color;
  this.el = document.createElement('div');
  this.setStyle();
  this.canvas.el.appendChild(this.el); 
}

Block.prototype.setStyle = function() {
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