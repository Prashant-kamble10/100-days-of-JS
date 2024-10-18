const fs = require("fs")

const crypto = require("crypto")

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key)=>{
    console.log("crypto 1 done")
})

fs.readFile("./file.txt", "utf8", ()=>{
    console.log("file reading cb")
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