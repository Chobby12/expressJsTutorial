const express = require('express')
const app = express()
const port = 5000

app.get('/',(req, res)=>{
    res.status(200).json([{name: obinna, age: 32}])
})

app.listen(port, err => console.log(err || `server running at port: ${port}`))