class Rover {
    constructor(direction, x, y) {
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.travelLog = [];
    }
}
const rover = new Rover('n', 0, 0)


function commandRover(theRover, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];
        switch (order) {
            case 'l' || 'L':
                turnLeft(theRover, order)
                break;
            case 'r' || 'R':
                turnRight(theRover, order)
                break;
            case 'f' || 'F':
                moveForward(theRover, order)
                break;
            case 'b' || 'B':
                moveBackward(theRover, order)
                break;
            default:
                console.log("Guess that command didn't work! Command the theRover with the letters 'l', 'r', 'f' and 'b'.");
        }
    }
}

function turnLeft(theRover) {
    if (theRover.direction === 'n') {
        theRover.direction = 'w';
    } else if (theRover.direction === "w") {
        theRover.direction = "s";
    } else if (theRover.direction === "s") {
        theRover.direction = "e";
    } else if (theRover.direction === "e") {
        theRover.direction = "n";
    }
    console.log(`"Left" command received and the current direction is "${theRover.direction.toUpperCase()}"`);
}

function turnRight(theRover) {
    if (theRover.direction === "n") {
        theRover.direction = "e";
    } else if (theRover.direction === "e") {
        theRover.direction = "s";
    } else if (theRover.direction === "s") {
        theRover.direction = "w";
    } else if (theRover.direction === "w") {
        theRover.direction = "n";
    }
    console.log(`"Right" command received and the current position is "${theRover.direction.toUpperCase()}"`);
}

function moveForward(theRover) {
    if (theRover.x >= 0 && theRover.x <= 9 && theRover.y >= 0 && theRover.y <= 9) {
        if (theRover.direction === 'n') {
            theRover.y--;
        } else if (theRover.direction === 'e') {
            theRover.x++;
        } else if (theRover.direction === 's') {
            theRover.y++;
        } else if (theRover.direction === 'w') {
            theRover.x--;
        }
    } else {
        console.log("Look out! We are falling off our planet.");
    }
    let newPosition = { x: theRover.x, y: theRover.y };
    theRover.travelLog.push(newPosition);
}

function moveBackward(theRover) {
    if (theRover.x >= 0 && theRover.x <= 9 && theRover.y >= 0 && theRover.y <= 9) {
        if (theRover.direction === 'n') {
            theRover.y++;
        } else if (theRover.direction === 'e') {
            theRover.x--;
        } else if (theRover.direction === 's') {
            theRover.y--;
        } else if (theRover.direction === 'w') {
            theRover.x++;
        }
    } else {
        console.log("Look out! We are falling off our planet.");
    }
    let newPosition = { x: theRover.x, y: theRover.y };
    theRover.travelLog.push(newPosition);
}


commandRover(rover, "rffrffffffllffffbb");
console.log("The theRover went through the following path:");
console.log(rover.travelLog);

console.log(`The Rover's current position is: x: ${rover.travelLog[rover.travelLog.length - 1].x}, y: ${rover.travelLog[rover.travelLog.length - 1].y}`);