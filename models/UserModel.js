const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    usName:{
        type:String
    },
    usAdd:{
        type:String
    }
})

const User=mongoose.model("User",userSchema)
module.exports=User