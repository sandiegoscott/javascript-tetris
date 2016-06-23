describe("A cell", function() {
  var piece;

  beforeEach(function() {
    canvas = { };
    cell = new Cell(canvas, 0, 0,  10, 10,  3, "#234567");
  });

  it("should have size 3 or 4", function() {
    expect([3, 4]).toContain(cell.size);
  });

  it("should move down properly", function() {
    cell.moveDown();
    expect(cell.row).toEqual(11);
    expect(cell.col).toEqual(10);
  });

  it("should move left properly", function() {
    cell.moveLeft();
    expect(cell.row).toEqual(10);
    expect(cell.col).toEqual( 9);
  });

  it("should move properly", function() {
    cell.move(2, -2);
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual( 8);
  });

  it("should rotate corners properly for 3x3 pieces", function() {
    //spyOn(cell, 'move');
    cell.rotate();
    //expect(cell.move).toHaveBeenCalled());
    expect(cell.row).toEqual(10);
    expect(cell.col).toEqual(12);
    expect(cell.row_dif).toEqual(0);
    expect(cell.col_dif).toEqual(2);
    cell.rotate();
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual(12);
    expect(cell.row_dif).toEqual(2);
    expect(cell.col_dif).toEqual(2);
    cell.rotate();
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual(10);
    expect(cell.row_dif).toEqual(2);
    expect(cell.col_dif).toEqual(0);
    cell.rotate();
    expect(cell.row).toEqual(10);
    expect(cell.col).toEqual(10);
    expect(cell.row_dif).toEqual(0);
    expect(cell.col_dif).toEqual(0);
  });

  it("should rotate sides properly for 3x3 pieces", function() {
    cell = new Cell(canvas, 0, 1,  10, 11,  3, "#234567");
    cell.rotate();
    expect(cell.row).toEqual(11);
    expect(cell.col).toEqual(12);
    expect(cell.row_dif).toEqual(1);
    expect(cell.col_dif).toEqual(2);
    cell.rotate();
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual(11);
    expect(cell.row_dif).toEqual(2);
    expect(cell.col_dif).toEqual(1);
    cell.rotate();
    expect(cell.row).toEqual(11);
    expect(cell.col).toEqual(10);
    expect(cell.row_dif).toEqual(1);
    expect(cell.col_dif).toEqual(0);
    cell.rotate();
    expect(cell.row).toEqual(10);
    expect(cell.col).toEqual(11);
    expect(cell.row_dif).toEqual(0);
    expect(cell.col_dif).toEqual(1);
  });
});
