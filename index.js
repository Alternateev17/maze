let maze = [
  ['#','#','#','#','#','#','#','#','#'],
  ['#','+','+','+','#','+','+','+','#'],
  ['#','+','#','+','#','+','#','+','#'],
  ['+','+','#','+','0','+','#','+','#'],
  ['#','#','#','+','#','#','#','#','#'],
  ['#','#','+','+','#','#','#','#','#'],
  ['#','#','+','#','#','#','#','#','#'],
  ['#','#','#','#','#','#','#','#','#'],
]

// console.log(maze);

function checkPath(start, end) {
  maze[start.y][start.x] = 0

  let siblings = getValidSib(start);

  if (siblings.length > 0) {
    for (let i = 0; i < siblings.length; i++) {
      const current = siblings[i];

      const isSolved = current.x === end.x && current.y === end.y;
      const notVisited = maze[current.y][current.x] !== 0;

      if (isSolved || (notVisited && checkPath(current, end))) {
        console.log(current);

        return true;
      }
    }
  }
  return false;
}

function getValidSib(cord) {
  const { x, y } = cord;

  let cords = [];


  if (maze[y - 1] !== undefined) {
    cords.push({ x: x, y: y - 1, val: maze[y - 1][x] });
  }
  if (maze[y + 1] !== undefined) {
    cords.push({ x: x, y: y + 1, val: maze[y + 1][x] });
  }
  if (maze[y][x - 1] !== undefined) {
    cords.push({ x: x - 1, y: y, val: maze[y][x - 1] });
  }
  if (maze[y][x + 1] !== undefined) {
    cords.push({ x: x + 1, y: y, val: maze[y][x + 1] });
  }

  return cords.filter((crd) => crd.val === '+');
}

console.log(checkPath({ x: 4, y: 3}, { x: 0, y: 3 }));
// console.log(maze);




function getDirection(currentPoint, nextPoint) {
  switch (true) {
    case currentPoint[x] == nextPoint[x]  && currentPoint[y] < nextPoint[y]: return 'top';
    case currentPoint[x] == nextPoint[x]  && currentPoint[y] > nextPoint[y]: return 'bottom';
    case currentPoint[y] == nextPoint[y]  && currentPoint[x] < nextPoint[x]: return 'right';
    case currentPoint[y] == nextPoint[y]  && currentPoint[x] > nextPoint[x]: return 'left';
    default: throw new Exception ('Invalid next point');
  }
}


