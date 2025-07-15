

function placeOrder(orderId){
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random()*2000) + 1000

    setTimeout(() => {
      resolve(`order ${orderId} has been succesfully placed!`)
    }, delay);    
  })
}

async function runOrders() {
  console.log("Placing order...");

  const confirmation = await placeOrder(101)
  console.log(confirmation)
}
runOrders()
