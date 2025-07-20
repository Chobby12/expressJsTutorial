const express = require('express')
const cors = require('cors');
const app = express()
const {people, products} = require('./data')
const port = 5000

app.use(cors());

app.get('/',(req, res)=>{
    res.send(`<h1>Home Page</h1><a href='/api/v1/products'>Products</a>`)
})

app.get('/api/v1/products', (req, res)=>{
    const {search, limit} = req.query;
    let sortedProduct = products.filter(product=>product.name.startsWith(search))
    if(search&&limit){
        let limitedSortedProduct = sortedProduct.slice(0, limit)
        return res.status(200).json(limitedSortedProduct)
    }
    if(search){
        if(!sortedProduct.find(product => product.name==search)){
            return res.status(200).json([{status: 200, msg: 'opps, product not found'}])
        }
        return res.status(200).json(sortedProduct)
    }
    if(limit){
        let limitedProduct = products.slice(0, limit)
        return res.status(200).json(limitedProduct)
    }
    return res.status(200).json(products)
})

app.get('/api/v1/products/:id', (req, res)=>{
    const {id} = req.params
    const singleProduct = products.find(product => product.id == id)
    if(!singleProduct){
        return res.status(404).json([{status: 404, msg: 'product not found'}])
    }
    return res.status(200).json(singleProduct)
})

app.get('/api/v1/products',(req, res)=>{
    // const {search, limit} = req.query
    // console.log(search, limit)
    // res.send(name, limit)
})
app.all(/(.*)/, (req, res)=>{
    res.status(404).json([{status: 404, notFound: true}])
})

app.listen(port, err => console.log(`server is currently runnin on port: ${port}`))