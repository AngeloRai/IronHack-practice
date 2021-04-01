
// function calculator(num1, operator, num2) {
    
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//     }
// }

// function outputResult(){
//     let res = calculator(2,'+', 23);
//     console.log(res);
// }

// outputResult();


// function mixColor(col1, col2){
//     if (col1 === "red" && col2 === "blue" || col1 === "blue" && col2 === "red") {
//         return "purple"
//     }else if (col1 === "red" && col2 === "yellow" || col1 === "yellow" && col2 === "red") {
//         return "orange"
//     }else if (col1 === "blue" && col2 === "yellow" || col1 === "yellow" && col2 === "blue") {
//         return "green"
//     }
// }

// let mixedColors = mixColor('red', 'yellow')
// console.log(mixedColors);

const list = [
    [1, 2, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 20, 3, 4, 5],
    [1, 4, 3, 4, 5],
];
  
  
  
const matrix = [
    [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
    [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
    [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
    [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
    [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
    [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
    [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
    [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
    [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
    [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
    [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
    [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
    [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
    [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
    [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
    [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
    [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
  ];
  
// function greatestProduct(list) {
//     const numberOfRows = list.length;
//     const numberOfColumns = list[0].length;
    
    
//     const block = 4;
  
//     let biggest = 0;
//     let product = 1;
  
//     // by row
//     for (let r = 0; r < numberOfRows; r++) {
//         for (let c = 0; c <= numberOfColumns - block; c++) {
//             for (let k = 0; k < block; k++) {
//                 product *= list[r][c + k];
//             }
//             if (product > biggest) {
//                 biggest = product;
//             }
//             product = 1;
//         }
//     }

//     // by column
  
//     for (let c = 0; c < numberOfColumns; c++) {
//         for (let r = 0; r <= numberOfRows - block; r++) {
//             for (let k = 0; k < block; k++) {
//                 product *= list[r + k][c];
//             }
//             if (product > biggest) {
//                 biggest = product;
//             }
//         product = 1;
//         }
//     }

//     // diagonal /

//     for (let r = 0; r < numberOfRows; r++) {
//         for (let c = 3; c <= numberOfColumns - block; c++) {
//             for (let k = 0; k < block; k++) {
//                 product *= list[r + k][c + k];
//             }
//             if (product > biggest) {
//                 biggest = product;
//             }
//             product = 1;
//         }
//     }

//      // diagonal \
  
//     for (let c = 3; c < numberOfColumns; c++) {
//         for (let r = 0; r <= numberOfRows - block; r++) {
//             for (let k = 0; k < block; k++) {
//                 product *= list[r + k][c + k];
//             }
//             if (product > biggest) {
//                 biggest = product;
//             }
//         product = 1;
//         }
//     }

//     return biggest;
// }

  
//     // vertical
  
//   console.log(greatestProduct(matrix));

const words = [
    "apple",
    "banana",
    "pineaplle",
    "strawberry",
    "apple",
    "banana",
    "pineaplle",
    "orange",
  ];

  function doesWordExist(wordsArr, word) {
    return wordsArr.includes(word)
   
}

console.log(doesWordExist(words, "appl"));

  // 9: Function findUnique() should return the first non-duplicate (non-repeating) word in an array
  function firstNonRepeating(wordsArr) {
    let count = 0;
    for (let i in wordsArr) {
      count = 0;
      for (let j in wordsArr) {
        if (wordsArr[i] === wordsArr[j]) {
          count++;
        }
      }
      if (count < 2) {
        return wordsArr[i];
      }
    }
  }
  
  console.log(firstNonRepeating(words));

  class Grid {
    contructor() {
      this.grid = [];
      this.hovers = [];
  
      this.initializeGrid();
    }
  
    initializeGrid() {
      const rows = [];
  
      for (let i = 0; i < 10; i++) {
        const currentRow = [];
        for (let j = 0; j < 10; j++) {
          currentRow.push(j);
        }
        rows.push(currentRow);
      }
  
      this.grid = rows;
    }
  
    drawGrid() {
      console.log(this);
  
      for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid[0].length; j++) {
          this.hovers.map((hover) => {
            if (hover.x === i && hover.y === j) {
              this.grid[i][j] = "x";
            }
          });
        }
      }
    }
  
    addHover(hover) {
      this.hovers.push(hover);
    }
  }
  
  class Hover {
    constructor() {
      this.directions = ["N", "E", "S", "W"];
      (this.direction = "N"), (this.x = 0), (this.y = 0), (this.travelLog = []);
    }
  
    turnLeft() {
      let currentIndex = this.directions.indexOf(this.direction);
  
      currentIndex -= 1;
  
      if (currentIndex < 0) {
        this.direction = this.directions[this.directions.length - 1];
      } else {
        this.direction = this.directions[currentIndex];
      }
    }
  
    turnRight() {
      let currentIndex = this.directions.indexOf(this.direction);
  
      currentIndex += 1;
  
      if (currentIndex > this.directions.length - 1) {
        this.direction = this.directions[0];
      } else {
        this.direction = this.directions[currentIndex];
      }
    }
  
    moveForward() {
      switch (this.direction) {
        case "N":
          if (this.y > 0) {
            this.y--;
            break;
          }
        case "E":
          if (this.x < 9) {
            this.x++;
            break;
          }
        case "S":
          if (this.y < 9) {
            this.y++;
            break;
          }
        case "W":
          if (this.x > 0) {
            this.x--;
            break;
          }
      }
      this.travelLog.push(`${this.x}, ${this.y}`);
      console.log(this.x, this.y);
    }
  
    moveBackwards() {
      switch (this.direction) {
        case "N":
          if (this.y < 9) {
            return this.y++;
          }
        case "E":
          if (this.x > 0) {
            return this.x--;
          }
        case "S":
          if (this.y > 0) {
            return this.y--;
          }
        case "W":
          if (this.x < 9) {
            return this.x++;
          }
      }
      this.travelLog.push(`${this.x}, ${this.y}`);
      console.log(this.x, this.y);
    }
  
    applyCommand(command) {
      command.split("").map((currentDirection) => {
        switch (currentDirection) {
          case "f":
            return this.moveForward();
          case "r":
            return this.turnRight();
          case "l":
            return this.turnLeft();
          case "b":
            return this.moveBackwards();
        }
      });
    }
  }
  
  // const game = new Map();
  
  const curiosity = new Hover();
  
  curiosity.applyCommand("rffrfflff");
  
  console.log(curiosity);