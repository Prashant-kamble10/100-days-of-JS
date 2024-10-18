process.nextTick(cb)

Promise.resolve(cb)

setTimeout(cb, 0)

setImmediate(cb)

fs.readFile("./file.txt", cb)

https.get("URL", cb)

// output

// nextTick
// promise
// setTimeout
// fs.readFile
// https.get
// setImmediate

