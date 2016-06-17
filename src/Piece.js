//
// Tetris piece
//

function Piece(index) {
  this.pattern = this.patterns[index];
  this.position = 0;  // 0..cells.length-1
  this.rotation = 0;  // 0, 1, 2, 3
}

Piece.prototype.moveDown = function() {
  this.position += 1;
};

Piece.prototype.patterns = [
  [
    [[0,1], [1,1], [2,1], [2,2]],   //   *
                                    //   *
                                    //   * *

    [[1,0], [1,1], [1,2], [0,2]],   //     *
                                    // * * *
                                    //

    [[0,0], [0,1], [1,1], [2,1]],   // * *
                                    //   *
                                    //   *

    [[2,0], [1,0], [1,1], [1,2]]    //
                                    // * * *
                                    // *
  ]
];
