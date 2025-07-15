let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")


if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry User but are you dumb")
}
let sum = parseInt(a) + parseInt(b)


function main(){

    let x = 1
    
    try {
        console.log("The sum is ", sum*x);
        return true
        
    } catch (error) {
        console.log("Err agya bhai ab kya kru");
        return false
        
    }
    finally{
        console.log("files are being closed");   
    }
}

let c = main()

