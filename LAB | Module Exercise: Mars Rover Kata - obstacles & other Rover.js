// Suggest to run code in Repl.it or any other console, the console.log of the travelLog looks a bit strange in Codepen.
// ======================

// Ensure travelLog starting coordinates correspond with x y coordinates.

let theRover1 = {
  name: "Rover1",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }],
  roverSymbol: "R1",
  count: 0,
  commands: "frffrfflffir"
};

let theRover2 = {
  name: "Rover2",
  direction: "N",
  x: 2,
  y: 4,
  travelLog: [{ x: 2, y: 4 }],
  roverSymbol: "R2",
  count: 0,
  commands: "flffrfbbpblf"
};

// ======================

// "O" is an Obstacle
// Before executing functions update position of Rover 1 or Rover 2 based on coordinates.

let board = [
  ["R1", "", "O", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["O", "", "", "", "", "O", "", "", ""],
  ["", "", "R2", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "O", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "O", "", "", "O", "", "", "", ""]
];


function turnLeft(rover) {
  console.log(`turnLeft was called by ${rover.name}!`);
  switch (rover.direction) {
    case "N":
      console.log(`${rover.name} is facing North.`);
      rover.direction = "W";
      console.log(`${rover.name} is now facing West.`);
      break;
    case "E":
      console.log(`${rover.name} is facing East.`);
      rover.direction = "N";
      console.log(`${rover.name} is now facing North.`);
      break;
    case "S":
      console.log(`${rover.name} is facing South.`);
      rover.direction = "E";
      console.log(`${rover.name} is now facing East.`);
      break;
    case "W":
      console.log(`${rover.name} is facing West.`);
      rover.direction = "S";
      console.log(`${rover.name} is now facing South.`);
      break;
  }
}

function turnRight(rover) {
  console.log(`turnRight was called by ${rover.name}!`);
  switch (rover.direction) {
    case "N":
      console.log(`${rover.name} is facing North.`);
      rover.direction = "E";
      console.log(`${rover.name} is now facing East.`);
      break;
    case "E":
      console.log(`${rover.name} is facing East.`);
      rover.direction = "S";
      console.log(`${rover.name} is now facing South.`);
      break;
    case "S":
      console.log(`${rover.name} is facing South.`);
      rover.direction = "W";
      console.log(`${rover.name} is now facing West.`);
      break;
    case "W":
      console.log(`${rover.name} is facing West.`);
      rover.direction = "N";
      console.log(`${rover.name} is now facing North.`);
      break;
  }
}

function moveForward(rover) {
  console.log(`moveForward was called by ${rover.name}!`);
  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        if (board[rover.y - 1][rover.x] === "") {
          board[rover.y][rover.x] = "";
          rover.y--;
        } else {
          console.log(
            `${rover.name} ran into an obstacle or other Rover at x: ${
              rover.x
            } y: ${rover.y - 1}.`
          );
        }
      } else {
        console.log(`${rover.name} would be off Mars!`);
      }
      break;
    case "E":
      if (rover.x < 9) {
        if (board[rover.y][rover.x + 1] === "") {
          board[rover.y][rover.x] = "";
          rover.x++;
        } else {
          console.log(
            `${rover.name} ran into an obstacle or other Rover at x: ${rover.x +
              1} y: ${rover.y}.`
          );
        }
      } else {
        console.log(`${rover.name} would be off Mars!`);
      }
      break;
    case "S":
      if (rover.y < 9) {
        if (board[rover.y + 1][rover.x] === "") {
          board[rover.y][rover.x] = "";
          rover.y++;
        } else {
          console.log(
            `${rover.name} ran into an obstacle or other Rover at x: ${
              rover.x
            } y: ${rover.y + 1}.`
          );
        }
      } else {
        console.log(`${rover.name} would be off Mars!`);
      }
      break;
    case "W":
      if (rover.x > 0) {
        if (board[rover.y][rover.x - 1] === "") {
          board[rover.y][rover.x] = "";
          rover.x--;
        } else {
          console.log(
            `${rover.name} ran into an obstacle or other Rover at x: ${rover.x -
              1} y: ${rover.y}.`
          );
        }
      } else {
        console.log(`${rover.name} would be off Mars!`);
      }
      break;
  }
  board[rover.y][rover.x] = rover.roverSymbol;
  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
  //console.log(board);
}

function moveBackward(rover) {
  console.log(`moveBackward was called by ${rover.name}!`);
  switch (rover.direction) {
    case "N":
      if (rover.y < 9) {
        if (board[rover.y + 1][rover.x] === "") {
          board[rover.y][rover.x] = "";
          rover.y++;
        } else {
          console.log(
            `${rover.name} ran into an obstacle or other Rover at x: ${
              rover.x
            } y: ${rover.y + 1}.`
          );
        }
      } else {
        console.log(`${rover.name} would be off Mars!`);
      }
      break;
    case "E":
      if (rover.x > 0) {
        if (board[rover.y][rover.x - 1] === "") {
          board[rover.y][rover.x] = "";
          rover.x--;
        } else {
          console.log(
            `${rover.name} ran into an obstacle or other Rover at x: ${rover.x -
              1} y: ${rover.y}.`
          );
        }
      } else {
        console.log(`${rover.name} would be off Mars!`);
      }
      break;
    case "S":
      if (rover.y > 0) {
        if (board[rover.y - 1][rover.x] === "") {
          board[rover.y][rover.x] = "";
          rover.y--;
        } else {
          console.log(
            `${rover.name} ran into an obstacle or other Rover at x: ${
              rover.x
            } y: ${rover.y - 1}.`
          );
        }
      } else {
        console.log(`${rover.name} would be off Mars!`);
      }
      break;
    case "W":
      if (rover.x < 9) {
        if (board[rover.y][rover.x + 1] === "") {
          board[rover.y][rover.x] = "";
          rover.x++;
        } else {
          console.log(
            `${rover.name} ran into an obstacle or other Rover at x: ${rover.x +
              1} y: ${rover.y}.`
          );
        }
      } else {
        console.log(`${rover.name} would be off Mars!`);
      }
      break;
  }
  board[rover.y][rover.x] = rover.roverSymbol;
  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
  //console.log(board); // When you want to keep on seeing the movements on the board
}

function drivingRover(ro1, ro2) {
  let turn;
  while (ro1.count < ro1.commands.length || ro2.count < ro2.commands.length) {
    if (ro1.count <= ro2.count) {
      turn = ro1;
    } else {
      turn = ro2;
    }
    command = turn.commands[turn.count];
    switch (command) {
      case "l": // turn left
        turnLeft(turn);
        break;
      case "r": // turn right
        turnRight(turn);
        break;
      case "f": // move forward
        moveForward(turn);
        break;
      case "b": // move forward
        moveBackward(turn);
        break;
      case undefined: // when no more commands are provided for a rover
        break;
      default:
        console.log(`${turn.commands[turn.count]} is not a valid command.`);
    }
    turn.count += 1;
  }
  console.log("Rover 1: \n", ro1.travelLog) 
  console.log("Rover 2: \n", ro2.travelLog);
  // console.log(board); // To show the end state of the board.
}

drivingRover(theRover1, theRover2);
