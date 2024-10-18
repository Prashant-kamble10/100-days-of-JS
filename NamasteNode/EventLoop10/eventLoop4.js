const fs = require("fs")

const a = 100;

setImmediate(()=> console.log("setImmediate 1"))

setTimeout(()=> console.log("setTimeout 1"), 0)

Promise.resolve().then(() => console.log("promise"))

fs.readFile("./file.txt", "utf8", ()=>{
    setTimeout(()=> console.log("setTimeout 2"), 0)

    process.nextTick(()=> console.log("nextTick 2"))

    setImmediate(()=> console.log("setImmediate 2"))

    console.log("file reading CB")
})


process.nextTick(()=> console.log("nextTick 1"))

function printA(){
    console.log("a =", a)
}

printA()
console.log("last line of the file")

// output

// a = 100
// last line of the file
// nextTick 1
// promise
// setTimeout 1
// setImmediate 1
// file reading CB
// nextTick 2
// setImmediate 2
// setTimeout 2