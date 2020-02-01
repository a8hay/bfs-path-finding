function bfs() {
  let startNode;
  let endNode;
  for (let cell of grid) {
    if (cell.isStart) {
      startNode = cell;
    }
    if (cell.isEnd) {
      endNode = cell;
    }
  }
  let Q = [];
  startNode.discovered = true;
  //push in Q
  Q.splice(0, 0, startNode);
  while (Q.length > 0) {
    let current = Q.pop();
    if (current.isEnd) {
      console.log("found goal node");
      break;
    } else {
      for (let neighbour of current.neighbours) {
        if (neighbour.isWall) {
          continue;
        }
        // console.log(neighbour);
        if (!neighbour.discovered) {
          // console.log(neighbour);
          neighbour.discovered = true;
          neighbour.parent = current;
          Q.splice(0, 0, neighbour);
        }
      }
    }
  }

  let end = endNode;
  while (end.parent != null) {
    // console.log(end);
    end.isPath = true;
    end = end.parent;
  }
  //   console.log(startNode);
}
