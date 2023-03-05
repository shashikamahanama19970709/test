const express=require('express')
const mongoose =require('mongoose');
const Student = require('./models/StudentModel');
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

// app.post('/namehere',(req,res) =>{
//     const product=new Product({
//         name: req.body.name,
//         image: req.body.image,
        
//     })

//     product.save().then((createdProduct=>{
//         res.status(201).json(createdProduct)
//     })).catch((err)=>{
//         res.status(500).json({
//             error:err,
//             success:false
//         })
//     })
// })

app.get('/',async(req,res)=>{
    // const Student=require("./models/StudentModel")
    // try{
    //     const student=new Student
    //     student.stname="new stuent name"
    //     const studentSaved=await student.save()
    //     console.log(studentSaved===student)

    //     const students=await Student.find()
    //     console.log(students.length)
    //     res.send("Student created " + student._id)


    // }catch(er){
    //     next(er)

    // }
    res.json({message:"API running...."})
})

app.get('/user',async(req,res)=>{
    const User=require("./models/UserModel")
    try{
        const user=new User
        user.usName="new user name"
        user.usAdd="new user address"
        
        const userSaved=await user.save()
        console.log(userSaved===user)

        const users=await User.find()
        console.log(users.length)
        res.send("User created -> " + user._id)


    }catch(er1){
        next(er1)

    }
})











app.get('/a',(req,res,next)=>{
    setTimeout(()=>{
        try{
            console.log("asynchronouse code");
        }catch(er){
            next(er); 
        }
       
    },1000)

    // next(new Error("some error occured"));
})






// app.use('/api',apiRoutes)

app.use((error,req,res,next)=>{
    res.status(500).json({
        message:error.message,
        stack:error.stack
    })
})

app.get('/api/product',(req,res)=>{
    res.send("handling product routes...")
})

app.get('/abc',(req,res)=>{
    res.send('hello my life!')
})

app.get('/two',(req,res)=>{
    console.log("third middleware");
    res.send('hello World!2')
})

app.listen(port,()=>{
    console.log(`Example app listing on port ${port}`)
})

