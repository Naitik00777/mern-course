const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    res.render("index", { siteName: siteName, searchText: searchText })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas Why and Whean"
    let blogContent = "Its a very good brand"
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
