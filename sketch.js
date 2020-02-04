let rows;
let cols;
let cellsize = 20;
let grid = [];
let solveButton;
let clearButton;

function setup() {
  createCanvas(1350, 600);

  rows = floor(height / cellsize);
  cols = floor(width / cellsize);

  //create cells
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let newCell = new Cell(i, j);
      grid.splice(index(i, j), 0, newCell);
    }
  }
  //

  //add neighbours
  for (cell of grid) {
    cell.addNeighbours();
  }
  //

  //create buttons
  solveButton = createButton("solve");
  solveButton.position(20, height + 20);
  solveButton.mousePressed(bfs);

  clearButton = createButton("clear");
  clearButton.position(120, height + 20);
  clearButton.mousePressed(reset);
  //
}

function draw() {
  background(51);

  //draw cell on canvas
  for (let cell of grid) {
    cell.show();
  }
  //

  //xxxxxxxxxxxxxxxxxMAKING START END WALLS LOGICxxxxxxxxxxxxxxxxx
  let x = floor(map(mouseX, 0, width, 0, cols));
  let y = floor(map(mouseY, 0, height, 0, rows));
  if (x >= 0 && y >= 0 && x < cols && y < rows) {
    if (mouseIsPressed && mouseButton == LEFT) {
      grid[index(x, y)].isWall = true;
    }
    if (keyIsPressed && key === "s") {
      grid[index(x, y)].isStart = true;
    }
    if (keyIsPressed && key === "e") {
      grid[index(x, y)].isEnd = true;
    }
  }
  //xxxxxxxxxxxxxxxxxMAKING START END WALLS LOGICxxxxxxxxxxxxxxxxx
}

//HELPER FUNCTONS
function index(i, j) {
  if (i < 0 || i >= cols || j < 0 || j >= rows) {
    return -1;
  }
  return i * rows + j;
}

function reset() {
  //clear the grid
  grid = [];
  //create cells
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let newCell = new Cell(i, j);
      grid.splice(index(i, j), 0, newCell);
    }
  }
  //

  //add neighbours
  for (cell of grid) {
    cell.addNeighbours();
  }
  //
}
