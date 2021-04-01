// 1: Function product() should return the product of any 2 given numbers
function product(x, y) {
  return x * y
}

// 2: Function isEven() should return true/false depending whether a given number is even
function isEven(num) {
  return num % 2 == 0 
}

// 3: Function maxOfTwoNumbers() should return the greater of 2 given numbers
function maxOfTwoNumbers(a, b) {
   if (a>b) {
    return a
  }
  return b
}

// 4: Function maxOfThreeNumbers() should return the greater of 3 given numbers
function maxOfThreeNumbers(a, b, c) {
   if (a > b && a > c) {
    return a
  }else if(b > a && b > c ){
    return b
  }
  return c
}

// 5: Function sumArray() should return the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
   return sum 
}

// 6: Function maxOfArray() should return the greatest number of a non-empty array
function maxOfArray(numbers) {
  let max = 0;
  for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > max){
      max = numbers[i]
    }
  }
  return max
}
// 7: Function longestString() should return the longest string in an array
function longestString(strings) {
  let longest = 0;
  for(let i = 0; i < strings.length; i++){
    if (strings[i].length > longest){
      longest = strings[i]
    }
  }
  return longest
}

// 8: Function doesWordExist() should return whether a word is in the array
function doesWordExist(wordsArr, word) {
    for(let i = 0; i < wordsArr.length; i++){
      if(wordsArr[i] == word){
        return true
      }
    }
  return false
}

// 9: Function findUnique() should return the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
 var result = '';
  var count = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    count = 0;
    for (var j = 0; j < wordsArr.length; j++) {
      if (wordsArr[i] === wordsArr[j]) {
        count += 1;
      }
    }
    if (count < 2) {
      result = wordsArr[i];
      break;
    }
  }
  return result;
}

// 10: Function getFullName() should return the string representing person's full name based on the provided object with first and last name as its properties. Example object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
   return personObj.firstName + ' ' + personObj.lastName;
 }


// 11: Function maxTwoDimArray() should return the greatest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let biggest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= matrix[i].length; j++) {
      if (matrix[i][j] > biggest) {
        biggest = matrix[i][j];
      }
    }
  }
  return biggest
}