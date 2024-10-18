const fs = require("fs")

const a = 100;

setImmediate(()=> console.log("setImmediate"))

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("file reading CB")
})

setTimeout(()=> console.log("setTimeout"), 0)

function printA(){
    console.log("a =", a)
}

printA()
console.log("last line of the file")

// output

// a = 100
// last line of the file
// setTimeout
// setImmediate
// file reading CB