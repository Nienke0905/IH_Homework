// Rover Object Goes Here
// ======================
let board = [
  ["R", "", "O", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["O", "", "", "", "", "O", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "O", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""]
];

let theRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }]
};

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      console.log("Rover is facing North.");
      rover.direction = "W";
      console.log("Rover is now facing West.");
      break;
    case "E":
      console.log("Rover is facing East.");
      rover.direction = "N";
      console.log("Rover is now facing North.");
      break;
    case "S":
      console.log("Rover is facing South.");
      rover.direction = "E";
      console.log("Rover is now facing East.");
      break;
    case "W":
      console.log("Rover is facing West.");
      rover.direction = "S";
      console.log("Rover is now facing South.");
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      console.log("Rover was facing North.");
      rover.direction = "E";
      console.log("Rover is now facing East.");
      break;
    case "E":
      console.log("Rover was facing East.");
      rover.direction = "S";
      console.log("Rover is now facing South.");
      break;
    case "S":
      console.log("Rover was facing South.");
      rover.direction = "W";
      console.log("Rover is now facing West.");
      break;
    case "W":
      console.log("Rover was facing West.");
      rover.direction = "N";
      console.log("Rover is now facing North.");
      break;
  }
}

// "O" is an Obstacle

function moveForward(rover) {
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      if (rover.y > 0) {
        if (board[rover.y - 1][rover.x] !== "O") {
          board[rover.y][rover.x] = "";
          rover.y--;
          board[rover.y][rover.x] = "R";
        } else {
          console.log(
            `You ran into an obstacle at x: ${rover.x} y: ${rover.y - 1}.`
          );
        }
      } else {
        console.log("Rover would be off Mars.");
      }
      break;
    case "E":
      if (rover.x < 9) {
        if (board[rover.y][rover.x + 1] !== "O") {
          board[rover.y][rover.x] = "";
          rover.x++;
          board[rover.y][rover.x] = "R";
        } else {
          console.log(
            `You ran into an obstacle at x: ${rover.x + 1} y: ${rover.y}.`
          );
        }
      } else {
        console.log("Rover would be off Mars");
      }
      break;
    case "S":
      if (rover.y < 9) {
        if (board[rover.y + 1][rover.x] !== "O") {
          board[rover.y][rover.x] = "";
          rover.y++;
          board[rover.y][rover.x] = "R";
        } else {
          console.log(
            `You ran into an obstacle at x: ${rover.x} y: ${rover.y + 1}.`
          );
        }
      } else {
        console.log("Rover would be off Mars");
      }
      break;
    case "W":
      if (rover.x > 0) {
        if (board[rover.y][rover.x - 1] !== "O") {
          board[rover.y][rover.x] = "";
          rover.x--;
          board[rover.y][rover.x] = "R";
        } else {
          console.log(
            `You ran into an obstacle at x: ${rover.x - 1} y: ${rover.y}.`
          );
        }
      } else {
        console.log("Rover would be off Mars.");
      }
      break;
  }
  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
}

function moveBackward(rover) {
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "N":
      if (rover.y < 9) {
        if (board[rover.y + 1][rover.x] !== "O") {
          board[rover.y][rover.x] = "";
          rover.y++;
          board[rover.y][rover.x] = "R";
        } else {
          console.log(
            `You ran into an obstacle at x: ${rover.x} y: ${rover.y + 1}.`
          );
        }
      } else {
        console.log("Rover would be off Mars.");
      }
      break;
    case "E":
      if (rover.x > 0) {
        if (board[rover.y][rover.x - 1] !== "O") {
          board[rover.y][rover.x] = "";
          rover.x--;
          board[rover.y][rover.x] = "R";
        } else {
          console.log(
            `You ran into an obstacle at x: ${rover.x - 1} y: ${rover.y}.`
          );
        }
      } else {
        console.log("Rover would be off Mars");
      }
      break;
    case "S":
      if (rover.y > 0) {
        if (board[rover.y - 1][rover.x] !== "O") {
          board[rover.y][rover.x] = "";
          rover.y--;
          board[rover.y][rover.x] = "R";
        } else {
          console.log(
            `You ran into an obstacle at x: ${rover.x} y: ${rover.y - 1}.`
          );
        }
      } else {
        console.log("Rover would be off Mars");
      }
      break;
    case "W":
      if (rover.x < 9) {
        if (board[rover.y][rover.x + 1] !== "O") {
          board[rover.y][rover.x] = "";
          rover.x++;
          board[rover.y][rover.x] = "R";
        } else {
          console.log(
            `You ran into an obstacle at x: ${rover.x + 1} y: ${rover.y}.`
          );
        }
      } else {
        console.log("Rover would be off Mars.");
      }
      break;
  }
  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
}

function commando(rover, commands) {
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    if (
      command === "f" ||
      command === "b" ||
      command === "r" ||
      command === "l"
    ) {
      switch (command) {
        case "l": // turn left
          turnLeft(rover);
          break;
        case "r": // turn right
          turnRight(rover);
          break;
        case "f": // move forward
          moveForward(rover);
          break;
        case "b": // move forward
          moveBackward(rover);
          break;
      }
    } else {
      console.log(`${commands[i]} is not a valid command.`);
    }
  }
  console.log(rover.travelLog);
  console.log(board);
}

commando(theRover, "bblflffrfflf");
