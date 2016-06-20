describe("Cell", function() {
  var piece;

  beforeEach(function() {
    cell = new Cell(2, 2,  12, 15,  3, "#234567");
  });

  it("should have size 3 or 4", function() {
    expect([3, 4]).toContain(cell.size);
  });

  it("should move down properly", function() {
    cell.moveDown();
    expect(cell.row).toEqual(11);
    expect(cell.col).toEqual(15);
  });

  it("should move left properly", function() {
    cell.moveLeft();
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual(14);
  });

  it("should move properly", function() {
    cell.move(2, -2);
    expect(cell.row).toEqual(14);
    expect(cell.col).toEqual(13);
  });

  it("should rotate corners properly", function() {
    cell.rotate();
    expect(cell.row).toEqual(10);
    expect(cell.col).toEqual(15);
    expect(cell.row_dif).toEqual(0);
    expect(cell.col_dif).toEqual(2);
    cell.rotate();
    expect(cell.row).toEqual(10);
    expect(cell.col).toEqual(13);
    expect(cell.row_dif).toEqual(0);
    expect(cell.col_dif).toEqual(0);
    cell.rotate();
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual(13);
    expect(cell.row_dif).toEqual(2);
    expect(cell.col_dif).toEqual(0);
    cell.rotate();
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual(15);
    expect(cell.row_dif).toEqual(2);
    expect(cell.col_dif).toEqual(2);
  });

  it("should rotate sides properly", function() {
    cell = new Cell(1, 0,  12, 15,  3, "#234567");
    cell.rotate();
    expect(cell.row).toEqual(13);
    expect(cell.col).toEqual(16);
    expect(cell.row_dif).toEqual(2);
    expect(cell.col_dif).toEqual(1);
    cell.rotate();
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual(17);
    expect(cell.row_dif).toEqual(1);
    expect(cell.col_dif).toEqual(2);
    cell.rotate();
    expect(cell.row).toEqual(11);
    expect(cell.col).toEqual(16);
    expect(cell.row_dif).toEqual(0);
    expect(cell.col_dif).toEqual(1);
    cell.rotate();
    expect(cell.row).toEqual(12);
    expect(cell.col).toEqual(15);
    expect(cell.row_dif).toEqual(1);
    expect(cell.col_dif).toEqual(0);
  });
});
