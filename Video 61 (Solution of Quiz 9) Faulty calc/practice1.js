let random = Math.random()
console.log(random)


let a = prompt("Enter your First no.")
let c = prompt("Enter operation")
let b = prompt("Enter your second no.")

let obj = {
    "+": "-",
    "/": "*",
    "*": "-",
    "-": "/"
}
if (random > 0.1){
    alert(`result is ${eval(`${a} ${c} %{b}`)}`)
}
else{
    c = obj[c]
    alert(`result is ${eval(`${a} ${c} %{b}`)}`)
}