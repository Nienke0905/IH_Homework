// jshint esversion: 6

function Rover(name, direction, x, y, commands) {
    this.name = name;
    this.direction = direction;
    this.roverSymbol = name;
    this.x = x;
    this.y = y;
    this.travelLog = [{x,y}];
    this.count = 0;
    this.commands = commands;
  }

function obstacles(){
    let y = Math.floor(Math.random() * 10);
    let x = Math.floor(Math.random() * 10);
    console.log(`New obstacle incoming at x: ${x}, y: ${y}.`);
    if (board[y][x] === ""){
      board[y][x] = "O";
    } else if (board[y][x] === "O"){
      console.log("There is already an obstacle here!");
    } else {
      console.log("Rover is stronger than incoming obstacle.");
    }
  }
  
let board = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
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
    //   console.log(board); // When you want to keep on seeing the movements on the board
      obstacles();
    }
    console.log("Rover 1 travel log: \n", ro1.travelLog);
    console.log("Rover 2 travel log: \n", ro2.travelLog);
    console.log(board); // To show the end state of the board.
  }

// new Rover ("name", "direction it is facing N(orth),E(east), S(outh), W(est)", coordinate x, coordinate y, "directions")
// directions are f(orward), r(irght to turn your rover to face it a new direction to the right), b(ackward), l(eft to turn your rove to face a new direction to the left)
  let rover1 = new Rover("Rover1", "N", 0,0, "frffrfflfirrffl");
  let rover2 = new Rover("Rover2", "S", 4,3, "brffffllfftrbbrf");
  
  drivingRover(rover1, rover2);
  
