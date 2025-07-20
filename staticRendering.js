const express = require('express')
const app = express()
const path = require('path')
const port = 5000

app.use(express.static(path.resolve(__dirname, 'public')))

app.listen(port,err => console.log(err ||`server is currentlty runnin on port ${port}`))