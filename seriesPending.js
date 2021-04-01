// let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer', "The Crown"];
// let seriesWatching = [];


// for (let i = 0; i < 5; i++) {
//     seriesWatching.push(seriesPending.shift())
//     console.log(`You've already watched ${seriesWatching.length} series until now.`);    
//     console.log(`There are ${seriesPending.length} left to watch.`);
//     console.log(`You are currently watching ${seriesWatching[i]}.`);
//     console.log(`You have watche the following series ${seriesWatching}`);
    
// }

// console.log(seriesPending);
// console.log(seriesWatching);

// seriesWatching.splice(0, seriesWatching.length);

// console.log(`Series watching: ${seriesWatching.length}  Series Pending: ${seriesPending.length}`)


// function capitalize(word){
//      let capitalized = (word[0].toUpperCase) + (word.slice(1));
//      return capitalized
// }

// console.log(capitalize("Angelo"));



// const capitalized = name.slice(' ').map(function(word)
// { 
//     capitalized = word[0].toUpperCase;
// } 

// ) 

// const nameCapitalized = names[0].toUpperCase() + names.slice(1)
// const names = "angelo raimondi";
// let words = names.split(" ");





// for (let i = 0; i < words.length; i++) {
   
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    
// }
const mySentence = "freeCodeCamp is an awesome resource";

const words = mySentence.split(' ');

let newWords = words.filter((words)=> {
    return words[0].toUpperCase() + words.substring(1)
})

newWords.join(' ')


console.log(newWords);
