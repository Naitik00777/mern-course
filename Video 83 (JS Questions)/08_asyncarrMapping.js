// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.



function asyncDoubleArray(arr){
    return arr.map(num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve (num ** 2);
                
            }, 500);

        })
    })
}

async function example() {
    let a =  [1,3,4,5,6,7]
    let promises = asyncDoubleArray(a)

    let result = await Promise.all(promises)
    console.log(result);
}

example()

