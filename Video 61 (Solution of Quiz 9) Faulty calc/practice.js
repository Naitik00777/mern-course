let random = Math.random()
console.log(random)

let a = prompt("Enter your first no.")
let c = prompt("Enter operation")
let b = prompt("Enter your second no.")

let obj = {
    "+": "-",
    "/": "+",
    "*": "-",
    "-": "**"
}

if(random>0.1){
    alert(`resul is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`resul is ${eval(`${a} ${c} ${b}`)}`)
}