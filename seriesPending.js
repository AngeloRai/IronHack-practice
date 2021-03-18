let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer', "The Crown"];
let seriesWatching = [];


for (let i = 0; i < 5; i++) {
    seriesWatching.push(seriesPending.shift())
    console.log(`You've already watched ${seriesWatching.length} series until now.`);    
    console.log(`There are ${seriesPending.length} left to watch.`);
    console.log(`You are currently watching ${seriesWatching[i]}.`);
    console.log(`You have watche the following series ${seriesWatching}`);
    
}

console.log(seriesPending);
console.log(seriesWatching);

seriesWatching.splice(0, seriesWatching.length);

console.log(`Series watching: ${seriesWatching.length}  Series Pending: ${seriesPending.length}`)
