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

  it("should rotateRight corners properly for 3x3 pieces", function() {
    //spyOn(block, 'move');
    block.rotateRight();
    //expect(block.move).toHaveBeenCalled();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual(12);
    expect(block.drow).toEqual(0);
    expect(block.dcol).toEqual(2);
    block.rotateRight();
    expect(block.row).toEqual(12);
    expect(block.col).toEqual(12);
    expect(block.drow).toEqual(2);
    expect(block.dcol).toEqual(2);
    block.rotateRight();
    expect(block.row).toEqual(12);
    expect(block.col).toEqual(10);
    expect(block.drow).toEqual(2);
    expect(block.dcol).toEqual(0);
    block.rotateRight();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual(10);
    expect(block.drow).toEqual(0);
    expect(block.dcol).toEqual(0);
  });

  it("should rotateRight sides properly for 3x3 pieces", function() {
    block = new Block(canvas, 10, 11, "#234567", 3, 0, 1 );
    block.rotateRight();
    expect(block.row).toEqual(11);
    expect(block.col).toEqual(12);
    expect(block.drow).toEqual(1);
    expect(block.dcol).toEqual(2);
    block.rotateRight();
    expect(block.row).toEqual(12);
    expect(block.col).toEqual(11);
    expect(block.drow).toEqual(2);
    expect(block.dcol).toEqual(1);
    block.rotateRight();
    expect(block.row).toEqual(11);
    expect(block.col).toEqual(10);
    expect(block.drow).toEqual(1);
    expect(block.dcol).toEqual(0);
    block.rotateRight();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual(11);
    expect(block.drow).toEqual(0);
    expect(block.dcol).toEqual(1);
  });

  it("should leave corner as started for Right then Left rotation for 3x3 pieces", function() {
    block.rotateRight();
    block.rotateLeft();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual(10);
  });

  it("should leave side as started for Left then Right rotation for 3x3 pieces", function() {
    block = new Block(canvas, 10, 11, "#234567", 3, 0, 1 );
    block.rotateRight();
    block.rotateLeft();
    expect(block.row).toEqual(10);
    expect(block.col).toEqual(11);
  });
});
