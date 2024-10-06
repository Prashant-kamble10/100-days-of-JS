// sync operation handle by V8 engine
console.log("Namaste Node")


// sync operation handle by V8 engine
var a = 10;
var b =  40;


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
// setTimeout called 
