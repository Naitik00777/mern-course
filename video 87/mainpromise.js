import fs from "fs/promises"

let a = await fs.readFile("anonymous2.txt")

let b = await fs.appendFile("anonymous2.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)