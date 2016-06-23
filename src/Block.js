function Block(canvas, row, col, color) {
  //
  // a block for each cell
  //
  this.canvas_el = canvas.el;
  this.row = row;
  this.col = col;
  this.el = document.createElement('div');
  this.canvas_el.appendChild(this.el); 

}

Block.prototype.setStyle = function(css) {
  // 'height: 25px; width: 25px; border: 1px solid #333; background-color: blue' 
  this.el.setAttribute('style', css + ' background-color: ' + this.color);
}