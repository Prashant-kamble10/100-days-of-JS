 const fs = require("fs")
 // const fs = require("node:fs")    // above line and this line is the same

const https = require("https")

// sync operation handle by V8 engine
console.log("Namaste Node")


// sync operation handle by V8 engine
var a = 10;
var b =  40;



// async operation handle by libuv
https.get("https://dummyjson.com/products/1" , (res)=>{
    console.log("got the products from the backend")
})


// async operation handle by libuv
setTimeout(()=>{
 console.log("SetTimeout executed after 5 sec")
}, 5000)



// async operation handle by libuv
fs.readFile("./file.txt", "utf-8", (err, data)=>{
    console.log("got the data from the file:", data)
})


// sync operation handle by V8 engine
function multiply(x, y){
    var result =  x * y;
    return result
}


// sync operation handle by V8 engine
var c = multiply(a, b)
console.log("multiplication result:" , c)



// output :

// namaste Node
// 400
// got the data from the file: This is the File Text
// got the products from the backend
// SetTimeout executed after 5 sec
