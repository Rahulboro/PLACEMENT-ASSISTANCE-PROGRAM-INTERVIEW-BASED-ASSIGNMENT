
const express = require('express')
const app = express()
const port = 4000

app.get('/post',(req, res) => {
    const onepage = {
        <h1>this is the heading </h1>
    }
})
app.get('/features',(req,res) => {
    res.send('feature are there ')
})

app.listen(4000,() => {
    console.log(`You are listening on port ${port}`);
})
