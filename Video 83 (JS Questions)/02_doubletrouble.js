
// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


let arr = [2, 2, 3, 5, 5, 5, 5, 7, 8, 4, 7, 7, 8]
const result = []

function doubletrouble(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) {
            result.push(arr[i])
        }
        else {
            result.push(arr[i] ** 2)
        }
    }
    return result;
}

const DT = doubletrouble(arr)

console.log(arr);
console.log(DT);
