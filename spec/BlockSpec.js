describe("A block", function() {

  beforeEach(function() {
    canvas = { el: document.createElement('div') };
    block = new Block(canvas, 10, 10, "#234567", 3, 0, 0 );
  });

  it("should have size 3 or 4", function() {
    expect([3, 4]).toContain(block.side);
  });

  it("should move down properly", function() {
    block.moveDown();
    expect(block.row).toEqual(11);
    expect(block.col).toEqual(10);
  });

  it("should move left properly", function() {
    block.moveLeft();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual( 9);
  });

  it("should move properly", function() {
    block.move(2, -2);
    expect(block.row).toEqual(12);
    expect(block.col).toEqual( 8);
  });

  it("should rotate corners properly for 3x3 pieces", function() {
    //spyOn(block, 'move');
    block.rotate();
    //expect(block.move).toHaveBeenCalled();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual(12);
    expect(block.drow).toEqual(0);
    expect(block.dcol).toEqual(2);
    block.rotate();
    expect(block.row).toEqual(12);
    expect(block.col).toEqual(12);
    expect(block.drow).toEqual(2);
    expect(block.dcol).toEqual(2);
    block.rotate();
    expect(block.row).toEqual(12);
    expect(block.col).toEqual(10);
    expect(block.drow).toEqual(2);
    expect(block.dcol).toEqual(0);
    block.rotate();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual(10);
    expect(block.drow).toEqual(0);
    expect(block.dcol).toEqual(0);
  });

  it("should rotate sides properly for 3x3 pieces", function() {
    block = new Block(canvas, 10, 11, "#234567", 3, 0, 1 );
    block.rotate();
    expect(block.row).toEqual(11);
    expect(block.col).toEqual(12);
    expect(block.drow).toEqual(1);
    expect(block.dcol).toEqual(2);
    block.rotate();
    expect(block.row).toEqual(12);
    expect(block.col).toEqual(11);
    expect(block.drow).toEqual(2);
    expect(block.dcol).toEqual(1);
    block.rotate();
    expect(block.row).toEqual(11);
    expect(block.col).toEqual(10);
    expect(block.drow).toEqual(1);
    expect(block.dcol).toEqual(0);
    block.rotate();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual(11);
    expect(block.drow).toEqual(0);
    expect(block.dcol).toEqual(1);
  });
});
