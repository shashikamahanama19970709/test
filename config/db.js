const { default: mongoose } = require("mongoose");

require("dotenv").config();
const mongoose=require("mongoose");

const connectDB=async()=>{
    try{
    await mongoose.connect(process.env.url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
        console.log("MongoDB connction success");

    }catch(error){
        console.error("MongoDB connction Fail");
        process.exit(1);

    }
}

module.exports=connectDB;