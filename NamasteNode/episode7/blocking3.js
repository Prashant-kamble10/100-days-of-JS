const crypto = require("crypto")


// sync operation handle by V8 engine
console.log("Namaste Node")


// sync operation handle by V8 engine
var a = 10;
var b =  40;

// sync operation handle by libuv but blocks the main thread, Do not use. 
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512")
    console.log("key is generated through sync")

// async operation handle by libuv
// it will only be called once call stack main thread is empty
setTimeout(()=>{
    console.log("setTimeout called for 0 sec ")
  }, 0)

// async operation handle by libuv
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, data) =>{
    console.log("key is generated through async")
})


function multiply(x, y){
    var result =  x * y;
    return result
}


// sync operation handle by V8 engine
var c = multiply(a, b)
console.log("multiplication result:" , c)


// output : please observe the output in console

// Namaste Node
// key is generated through sync
// multiplication result: 400
// setTimeout called for 0 sec
// key is generated through async

