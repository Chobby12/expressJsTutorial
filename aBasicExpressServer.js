const express = require('express')
const app = express()
const PORT = 5000

app.get('/',(req, res)=>{
    res.send(`<h1>Home Page</h1>`)
})

app.listen(PORT,err =>{
    if(err){
        console.log(err)
    }
    console.log(`Server is currently listenin on port: ${PORT}`)
})