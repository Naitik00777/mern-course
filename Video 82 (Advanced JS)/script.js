async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c){
    return a+b+c
}

(async function main() {
    // let a = await sleep()
    // console.log(a);

    // let b = await sleep()
    // console.log(b);

    // let [x, y, ...rest] = [3, 4, 5, 7, 9, 32, 64]
    // console.log(x, y, rest);

    let obj = {
        a: 1,
        b: 3,
        c: 4,
        d: 5
    }
    let {a, b} = obj
    console.log(a,b);

    let arr = [1, 4, 6]
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr)); 
})()



