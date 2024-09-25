// Modules protects their variables, function, Methods from leak, by default.


const name = "this is a sum module"
console.log(name)

function calculateSum(a,b){
    const sum = a + b;

    console.log(sum)
}


// for single exports
// module.exports = calculateSum;

// for multiple things to exports
 module.exports = {
    name : name,
    calculateSum : calculateSum
 }
//  above and below things are same
 module.exports = {name, calculateSum}
//  above and below things are same
 module.exports.name = name;
 module.exports.calculateSum = calculateSum;