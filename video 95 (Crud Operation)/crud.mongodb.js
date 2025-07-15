use("CrudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "Top G Trading Course",
//     price: 50000,
//     Trades: 2,
//     swings: 1
// })

// db.courses.insertMany([
//     {
//         "name": "Top G Trading Course",
//         "price": 50000,
//         "Trades": 2,
//         "swings": 1
//     },
//     {
//         "name": "Elite Forex Blueprint",
//         "price": 42000,
//         "Trades": 5,
//         "swings": 3
//     },
//     {
//         "name": "Crypto Mastery Program",
//         "price": 60000,
//         "Trades": 3,
//         "swings": 2
//     },
//     {
//         "name": "Stock Market Ninja",
//         "price": 35000,
//         "Trades": 4,
//         "swings": 1
//     },
//     {
//         "name": "Swing Trading Secrets",
//         "price": 28000,
//         "Trades": 2,
//         "swings": 4
//     },
//     {
//         "name": "Options Pro Bootcamp",
//         "price": 55000,
//         "Trades": 6,
//         "swings": 2
//     },
//     {
//         "name": "Day Trading Accelerator",
//         "price": 48000,
//         "Trades": 3,
//         "swings": 0
//     },
//     {
//         "name": "Algo Trading Formula",
//         "price": 65000,
//         "Trades": 4,
//         "swings": 2
//     },
//     {
//         "name": "The Scalping Playbook",
//         "price": 30000,
//         "Trades": 1,
//         "swings": 1
//     },
//     {
//         "name": "Ultimate Trader’s Course",
//         "price": 70000,
//         "Trades": 7,
//         "swings": 5
//     }
// ]
// )

// READ
// let a = db.courses.find({ price: { $gte: 50000 } })
// console.log(a)

// let b = db.courses.findOne({price: 50000}) 

// console.log(b)

// UPDATE

// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price: 0}, {$set:{price: 1000}})
// DELETE

// db.courses.deleteOne({price: 1000})

// db.courses.deleteMany({price: 1000})

// https://www.mongodb.com/docs/manual/reference/operator/query/