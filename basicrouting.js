const express = require('express')
const app = express()
const port = 5000

app.get('/',(req, res)=>{
    res.status(200).send('<h1>Home Page</h1>')
})
app.get('/about',(req, res)=>{
    res.status(200).send(`<h1>About Us</h1>`)
})
app.all(/(.*)/, (req, res)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(port, err => console.log(err || `Server is currently listening on port: ${port}`))