class Cell {
  constructor(i, j) {
    this.x = i;
    this.y = j;
    this.neighbours = [];
    this.isStart = false;
    this.isEnd = false;
    this.discovered = false;
    this.parent = null;
    this.isPath = false;
    this.clr = [255, 255, 255, 255];
  }

  show() {
    if (this.isStart) {
      this.clr = [0, 255, 0, 100];
    }
    if (this.isEnd) {
      this.clr = [255, 0, 0, 150];
    }
    if (this.discovered) {
      this.clr = [255, 0, 255, 100];
    }
    if (this.isPath) {
      this.clr = [255, 255, 50, 255];
    }
    fill(this.clr[0], this.clr[1], this.clr[2], this.clr[3]);
    rect(this.x * cellsize, this.y * cellsize, cellsize, cellsize);
  }

  addNeighbours() {
    let top = index(this.x - 1, this.y);
    let right = index(this.x, this.y + 1);
    let bottom = index(this.x + 1, this.y);
    let left = index(this.x, this.y - 1);
    if (top != -1) {
      this.neighbours.push(grid[top]);
    }
    if (right != -1) {
      this.neighbours.push(grid[right]);
    }
    if (bottom != -1) {
      this.neighbours.push(grid[bottom]);
    }
    if (left != -1) {
      this.neighbours.push(grid[left]);
    }
  }
}
