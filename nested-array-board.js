let board = [
    [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
    [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }],
    [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }]
]

let player = {
    x: 1,
    y: 1,
    path: [{ x: 1, y: 1 }]
}

function moveHorizontally(thePlayer, command) {
    if (thePlayer.y >= 0 && thePlayer.y < 2) {
        if (command === 'l' || command === 'L') {
            player.y--;
        } else if (command === 'r' || command === 'R') {
            player.y++;
        } else {
            console.log("Please type 'l' to move left or 'r' to move right.");
        }
        let newPosition = { x: thePlayer.x, y: thePlayer.y };
        thePlayer.path.push(newPosition);
    } else {
        console.log("You can't place the player out of the board, that's not allowed.");
    }
    console.log(`Player has position x: ${thePlayer.x} y: ${thePlayer.y}`);
}

function moveVertically(thePlayer, command) {
    if (thePlayer.x >= 0 && thePlayer.x < 2) {
        if (command === 'u' || command === 'U') {
            player.x--;
        } else if (command === 'd' || command === 'D') {
            player.x++;
        } else {
            console.log("Please type 'u' to move upwards or 'd' to move downwards.");
        }
        let newPosition = { x: thePlayer.x, y: thePlayer.y };
        thePlayer.path.push(newPosition);
    } else {
        console.log("You can't place the player out of the board, that's not allowed.");
    }
    console.log(`Player has position x: ${thePlayer.x} y: ${thePlayer.y}`);
}

function commandPlayer(thePlayer, orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i]

        switch (order){
            case 'l' || 'L':
                moveHorizontally(thePlayer, order)
                break;
            case 'r'  || 'R':
                moveHorizontally(thePlayer, order)
                break;
            case 'u'  || 'U':
                moveVertically(thePlayer, order)
                break;    
            case 'd'  || 'D':
                moveVertically(thePlayer, order)
                break;
            default:
                console.log("Guess that command didn't work!");
            }
    }
}
// moveHorizontally(player, 'l')

// moveVertically(player, 'u')

// moveHorizontally(player, 'r')
// moveHorizontally(player, 'r')

// moveVertically(player, 'd')


commandPlayer(player, 'lurrddd')
console.log(player);

