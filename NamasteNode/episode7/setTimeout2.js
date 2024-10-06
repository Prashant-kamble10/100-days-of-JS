// sync operation handle by V8 engine
console.log("Namaste Node")


// sync operation handle by V8 engine
var a = 10;
var b =  40;


// after execution context is wholly executed and call stack is empty,
//  after that only async operations/callback will get into call stack, for execution.

// async operation handle by libuv
setTimeout(()=>{
  console.log("setTimeout called for 0 sec ")
}, 0)


// async operation handle by libuv
setTimeout(()=>{
  console.log("setTimeout called ")
}, 5000)

function multiply(x, y){
    var result =  x * y;
    return result
}


// sync operation handle by V8 engine
var c = multiply(a, b)
console.log("multiplication result:" , c)


// output

// Namaste Node
// multiplication result: 400
// setTimeout called for 0 sec 
// setTimeout called 
