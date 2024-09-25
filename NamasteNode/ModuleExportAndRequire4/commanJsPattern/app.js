const {names} = require("./xyz")              // it is same as, function return
// require("./xyz")        ===  require("./xyz.js")      // it is same as, function return
// const calculateSum = require("./sum")                   // to access single import
// const obj = require("./sum")                             // to access multiple import
const {name, calculateSum} = require("./sum")              // to access multiple import

console.log("this is a app module")
// calculateSum(5,5)
//  obj.calculateSum(5,5)            
 calculateSum(5,5)            

//  console.log(obj.name)
 console.log(name)
 console.log(names)
 


console.log(this)   // { }
