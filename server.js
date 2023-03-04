const express=require('express')
const mongoose =require('mongoose')
const app=express()
const port=3000

url ='mongodb+srv://akila:1111@cluster0.2wepaeu.mongodb.net/mydb?retryWrites=true&w=majority';

mongoose.connect(url)
.then(()=>{
    console.log('database connction is ready...')
})
.catch((err)=>{
    console.log(err);
})

app.use((req,res,next)=>{
    console.log("first middleware");
    next()
})

// app.get('/',(req,res)=>{
//     const product={
//         name:'akila',
//         image:'abc',
//     }
//     res.send(product)
// })

const productSchema=mongoose.Schema({
    name: String,
    image: String,
})

const Product=mongoose.model('Product',productSchema);

app.post('/namehere',(req,res) =>{
    const product=new Product({
        name: req.body.name,
        image: req.body.image,
        
    })

    product.save().then((createdProduct=>{
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error:err,
            success:false
        })
    })
})

app.get('/abc',(req,res)=>{
    res.send('hello World!')
})

app.get('/two',(req,res)=>{
    console.log("third middleware");
    res.send('hello World!2')
})

app.listen(port,()=>{
    console.log(`Example app listing on port ${port}`)
})

