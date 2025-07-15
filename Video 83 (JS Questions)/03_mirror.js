// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


function mirrorMirror(str){
    const reversed  = str.split("").reverse().join("")
    return str + reversed
}

let a = "TOP G"
let MM = mirrorMirror(a)

console.log(MM);




// for reverse string

// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }