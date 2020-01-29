let rows;
let cols;
let cellsize = 30;
let grid = [];
let solveButton;

function setup() {
  createCanvas(600, 600);

  rows = floor(height / cellsize);
  cols = floor(width / cellsize);

  //create cells
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
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
  //
}

function draw() {
  background(51);

  //draw cell on canvas
  for (let cell of grid) {
    cell.show();
  }
  //

  //xxxxxxxxxxxxxxxxxMAKING START END LOGICxxxxxxxxxxxxxxxxx
  let x = floor(map(mouseX, 0, width, 0, cols));
  let y = floor(map(mouseY, 0, height, 0, rows));
  if (x >= 0 && y >= 0 && x < cols && y < rows) {
    if (mouseIsPressed && mouseButton == LEFT) {
      grid[index(x, y)].isStart = true;
    }
    if (mouseIsPressed && mouseButton == RIGHT) {
      grid[index(x, y)].isEnd = true;
    }
  }
  //xxxxxxxxxxxxxxxxxMAKING START END LOGICxxxxxxxxxxxxxxxxx
}

//HELPER FUNCTONS
function index(i, j) {
  if (i < 0 || i >= rows || j < 0 || j >= cols) {
    return -1;
  }
  return i * rows + j;
}
