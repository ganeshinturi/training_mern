//using fs module an application can communicate with os
/*let fs=require('fs')
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log("File has been saved!");
})*/

// server.mjs
/*const { createServer } =require('http')

const server = createServer((req, res) => {
  res.end('Hello World!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});*/

//create server using express framework

const express = require('express');
const cors = require('cors');
const app = express()
const port = 3000
const products = require('./products')

//middleware to allow cross-origin requests
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products',(req,res)=>{
  res.json(products);
})

//design an api to get single product
app.get('/product/:id',(req,res)=>{

  let productid = req.params.id;
  console.log(res);
  res.json(products[productid-1]);
})

app.post('/products',(req,res)=>{

  const {id,price,title,image} = req.body;
  let newProduct = {id,price,title,image};
  products.push(newProduct);
  res.json({msg:"product saved"});
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})