const mongoose=require("mongoose")
const Review=require("./ReviewModel")
const ImageSchema=mongoose.Schema({
    path:{type:String,required:true}
})
const studentSchema=mongoose.Schema({
    stname:{
        type:String,
        required:true,
        unique:true,

    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    count:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,

    },
    rating:{
        type:Number,
    },
    reviewsNumber:{
        type:Number,

    },
    sales:{
        type:Number,
        default:0
    },
    attrs:[
        {key:{type:String},value:{type:String}}
    ],
    Images:[ImageSchema],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        // ref:Review,
    }]
},{
    timestamps:true,

})
studentSchema.index()

const Student=mongoose.model("Student",studentSchema)

module.exports=Student