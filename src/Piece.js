//
// constructor: generate random Tetris piece
//

function Piece() {
  index = Math.floor(Math.random()*Piece.prototype.patterns.length)
  this.pattern = this.patterns[index];
  this.position = 0;  // 0..cells.length-1
  this.rotation = 0;  // 0, 1, 2, 3
  this.color = 0;     // HTML color
}

Piece.prototype.moveDown = function() {
  this.position += 1;
};

Piece.prototype.patterns = [
  [
    [[0,1], [1,1], [2,1], [2,2]],   // - * - -
                                    // - * - -
                                    // - * * -
                                    // - - - -

    [[1,0], [1,1], [1,2], [0,2]],   // - - * -
                                    // * * * -
                                    // - - - -
                                    // - - - -

    [[0,0], [0,1], [1,1], [2,1]],   // * * - -
                                    // - * - -
                                    // - * - -
                                    // - - - -

    [[2,0], [1,0], [1,1], [1,2]]    // - - - -
                                    // * * * -
                                    // * - - -
                                    // - - - -
  ], [
    [[0,1], [1,1], [2,1], [3,1]],   // - * - -
                                    // - * - -
                                    // - * - -
                                    // - * - -

    [[2,0], [2,1], [2,2], [2,3]],   // - - - -
                                    // - - - -
                                    // * * * *
                                    // - - - -

    [[0,2], [1,2], [2,2], [3,2]],   // - - * -
                                    // - - * -
                                    // - - * -
                                    // - - * -

    [[1,0], [1,1], [1,2], [1,3]],   // - - - -
                                    // * * * *
                                    // - - - -
                                    // - - - -
  ]
];
