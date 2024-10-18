

const fs = require("fs")

const crypto = require("crypto")

// by default thread pool are 4,
// see in the below code 
// for 4 thread pool, 5 task related to thread pool given

process.env.UV_THREADPOOL_SIZE = 8;

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 1 done")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 2 done")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 3 done")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 4 done")
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 5 done")
})