// let encryptThis = function (text) {
//   if (text.length === 1) {
//     return String(text.charCodeAt(0));
//   }
//   text = text.split(" ");
//   let encrypt = [];
//   for (let i = 0; i < text.length; i++) {
//     let string = text[i].split("");

//     string[0] = string[0].charCodeAt(0);

//     const aux = string[1];
//     string[1] = string[string.length - 1];
//     string[string.length - 1] = aux;

//     text[i] = string.join("");
//   }
//   return text.join(" ");
// };

// function smaller(nums) {
//   //code me
//   let clonedArr = [...nums];
//   let newArr = [];

//   nums.forEach((num, idx) => {
//     clonedArr.slice(0, idx + 1);

//     newArr.push(clonedArr.filter((cur) => cur > nums[idx]).length);
//   });

//   return newArr;
// }

// function smaller(nums) {
//   return nums.map(
//     (x, i) => nums.slice(i + 1).filter((value) => value < x).length
//   );
// }

//.map(x => Number(x))

let str = ('123456789');
function evenOrOdd(str) {
  
  let sumEven = str.split('').map(x => Number(x)).filter(num => num % 2 == 0).reduce((acc, curr) => acc + curr);
  let sumOdd = str.split('').map(x => Number(x)).filter(num => num % 2 == 1).reduce((acc, curr) => acc + curr);

   if (sumEven > sumOdd) return "Even is greater than Odd";
   if (sumEven < sumOdd) return "Odd is greater than Even";
  
  return 'Even and Odd are the same'
}


console.log(evenOrOdd(str));
