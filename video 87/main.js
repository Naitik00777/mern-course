const fs = require("fs")

// console.log(fs)
console.log("starting")
// fs.writeFileSync("anonymous.txt","I am the best trader")
fs.writeFile("anonymous2.txt", "I am the best trader in the world",()=>{
    console.log("done")
    fs.readFile("anonymous2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
    fs.appendFile("anonymous2.txt", " best of the best", (e, d)=>{
        console.log(d)
    })
} )
console.log("Ending")