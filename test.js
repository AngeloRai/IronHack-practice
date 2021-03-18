
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


function mixColor(col1, col2){
    if (col1 === "red" && col2 === "blue" || col1 === "blue" && col2 === "red") {
        return "purple"
    }else if (col1 === "red" && col2 === "yellow" || col1 === "yellow" && col2 === "red") {
        return "orange"
    }else if (col1 === "blue" && col2 === "yellow" || col1 === "yellow" && col2 === "blue") {
        return "green"
    }
}

let mixedColors = mixColor('red', 'yellow')
console.log(mixedColors);

