// The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(type){
    return new Promise((resolve) => {

    const delay = Math.floor(Math.random()*2000) + 1000
    setTimeout(() => {
        resolve(`Your ${type} is ready sir! have a good day `)
    }, delay);
        
    })
}

async function OrderCoffee() {
    console.log("Brewing started...");

    const message = await brewCoffee("Frappe")
    console.log(message);  
}


OrderCoffee()