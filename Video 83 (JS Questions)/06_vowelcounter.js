// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// function countVowels(str){
//     let count = 0
//     const vowels = "AEIOUaeiou"
//     for (let i = 0; i < str.length; i++) {
//         if(vowels.includes(str[i])){
//             count++
//         }   
//     }
//     return count
// }

// console.log(countVowels("Hello World"));    // Output: 3
// console.log(countVowels("AEiouXyz"));       // Output: 5
// console.log(countVowels("123!@#"));         // Output: 0




// function countVowels(str){
//     let count = 0;
//     for (const char of str) {
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
//             count ++ 
//         }
//     }
//     return count  
// }


// console.log(countVowels("Tera BHaI sAmay PUr badli s samay pUr bdla h ABJ aUr mere beech aati khali jamNa h"));  // Output: 27


function countVowels(str) {
    let count = 0
    const vowels = "AEIOUaeiou"
    for (const char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
   console.log(countVowels("Tera BHaI sAmay PUr badli s samay pUr bdla h ABJ aUr mere beech aati khali jamNa h"));


