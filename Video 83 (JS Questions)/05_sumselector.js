// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


function sumselctor(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<=0){
            break
        }
        sum += arr[i]    
    }
    return sum
}


console.log(sumselctor([5, 10, 15, -3, 20]));  
console.log(sumselctor([1, 2, 3]));            
console.log(sumselctor([-5, 10, 15]));