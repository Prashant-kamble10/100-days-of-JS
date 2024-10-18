process.env.UV_THREADPOOL_SIZE = 6; // Set the thread pool size before requiring crypto

const crypto = require("crypto");

// Running cryptographic tasks with a thread pool size of 6
const start = Date.now();

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("crypto 1 done", Date.now() - start);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("crypto 2 done", Date.now() - start);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("crypto 3 done", Date.now() - start);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("crypto 4 done", Date.now() - start);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("crypto 5 done", Date.now() - start);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("crypto 6 done", Date.now() - start);
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("crypto 7 done", Date.now() - start);
});
