const { names } = require("./xyz"); // it is same as, function return
// require("./xyz")        ===  require("./xyz.js")      // it is same as, function return
// const calculateSum = require("./sum")                   // to access single import
// const obj = require("./sum")                             // to access multiple import
const { name, calculateSum } = require("./sum"); // to access multiple import

// const { multiple, divide } = require("./calculate/index"); // both are fine
const {multiple, divide} = require("./calculate")              // both are fine
const data = require("./data.json")

console.log("this is a app module");
// calculateSum(5,5)
//  obj.calculateSum(5,5)
calculateSum(5, 5);
multiple(5, 5);
divide(5, 5);

console.log("data", data)
//  console.log(obj.name)
console.log(name);
console.log(names);

console.log(this); // { }
