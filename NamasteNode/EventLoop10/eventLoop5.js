const fs = require("fs")


setImmediate(()=> console.log("setImmediate "))

setTimeout(()=> console.log("setTimeout "), 0)

Promise.resolve().then(() => console.log("promise"))

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("file reading CB")
})


process.nextTick(()=> {
    process.nextTick(()=>  console.log("inner nextTick"))
    console.log("outer nextTick")
})


console.log("last line of the file")

// output

// last line of the file
// outer nextTick
// inner nextTick
// promise
// setTimeout
// setImmediate
// file reading CB