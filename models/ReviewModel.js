const mongoose=require("mongoose")

const reviewSchema=mongoose.Schema({
    comment:{type:String,required:true},
    rating :{type:Number,required:true},
    user:{
        _id:{type:mongoose.Schema.Types.ObjectId,required:true},
        Uname:{type:String,required:true}
     }
},{
    timestamps:true,
})


const Review=mongoose.model("Review")
module.exports=Review