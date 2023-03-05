const mongoose=require("mongoose")
const studentSchema=mongoose.Schema({
    stname:{
        type:String
    }
})

const Student=mongoose.model("Student",studentSchema)

module.exports=Student