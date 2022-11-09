const mongoose=require("mongoose")

const ToDoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        default: 'pending',
        enum: ["pending", "completed"]
    },
    deletedAt: {
        type: Date,
        default:null
    },
    isDeleted: {
        type: Boolean,
        default: false
    },

},{timestamps:true})


module.exports=mongoose.model("Task",ToDoSchema)


