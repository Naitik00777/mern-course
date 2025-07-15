const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))


app.use('/blog', blog)


app.use((req, res, next) => {
  fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n` )
  console.log(`${Date.now()} is a ${req.method}`)
  next()
})

app.use((req, res, next) => {
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/About', (req, res) => {
  res.send('Hello about!')
})
app.get('/Contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

