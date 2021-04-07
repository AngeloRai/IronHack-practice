

let numbers = [-3, 15, 8, -1, 7, -1]


function mirror(data) {
    let sortedArray = data.map(x => x).sort((a, b) => a - b )
    for (let i = sortedArray.length - 1; i > 0; i--) {
        sortedArray.push(sortedArray[i-1])
    }
    return sortedArray
}


console.log(mirror(numbers));