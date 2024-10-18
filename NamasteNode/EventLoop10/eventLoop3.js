const fs = require("fs")

const a = 100;

setImmediate(()=> console.log("setImmediate"))

Promise.resolve().then(() => console.log("promise"))

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("file reading CB")
})

setTimeout(()=> console.log("setTimeout"), 0)

process.nextTick(()=> console.log("nextTick"))

function printA(){
    console.log("a =", a)
}

printA()
console.log("last line of the file")

// output

// a = 100
// last line of the file
// nextTick
// promise
// setTimeout
// setImmediate
// file reading CB