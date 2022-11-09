const todoModel=require("../Model/todoModel")

const isValid=function(value){
    if(typeof value==="undefined"||typeof value===null) return false
    if(typeof value==="string"&& value.trim().length===0) return false
    return true
}

const createTask=async function(req,res){
    try {
        let data=req.body
        let{task,description}=data
        if(!isValid(task)){
           return res.status(400).send({status:false,msg:"please fill your task name"})
        }
        if(!isValid(description)){
           return res.status(400).send({status:false,msg:"please give the description about your task"})
        }
         let aboutTask={
             task:task,
             description:description
         }
         const todo=await todoModel.create(aboutTask)
         return res.status(201).send({status:true,msg:"Congrats! you have sucessfully created your today's task",data:todo})

    } catch (error) {
        return res.status(500).send({status:false,msg:error.message})
    }

}


const getAllListofTasks=async function(req,res){
      try {
        let allTask=await todoModel.find({isDeleted:false})
        if(!allTask){
         return res.status(404).send({status:false,msg:"there is not data found"})
        }
        return res.status(200).send({status:true,msg:"all the task details",data:allTask})
      } catch (error) {
        return res.status(500).send({status:false,msg:error.message})
      }
}

const updateTask=async function(req,res){
    try {
        let data=req.body
        let Id=req.params.Id
      
        let {task,description,status} =data
        let obj={}
        if(isValid(task)){
            obj.task=task
        }
        if(isValid(description)){
            obj.description=description
        }
       
        if(isValid(status)){
            if(!(["pending", "completed"].includes(status))){
                return res.status(400).send({status:false,message:"status is invalid"})
            }
            obj.status=status
        }
      
        let taskUpdate=await todoModel.findByIdAndUpdate({_id:Id},obj,{new:true})
        return res.status(200).send({msg:"your task!updated sucessfull",data:taskUpdate})

    } catch (error) {
        return res.status(500).send({status:false,msg:error.message})
    }
}


const deleteTask=async function(req,res){
    try {
        let Id=req.params.Id
        const task=await todoModel.findById({_id:Id})
        if(!task){
            return res.status(404).send({status:false,msg:"task data not found"})
        }
        if(task.isDeleted===true){
            return res.status(400).send({status:false,msg:"task already deleted"})
        } 
       
        const taskDetails=await todoModel.findByIdAndUpdate({_id:Id},{$set:{isDeleted:true,deletedAt:new Date()}},{new:true})
        return res.status(200).send({status:true,msg:" you have deleted your task",data:taskDetails})  
    } catch (error) {
        return res.status(500).send({status:false,msg:error.message})
    }
}




module.exports.createTask=createTask
module.exports.getAllListofTasks=getAllListofTasks
module.exports.updateTask=updateTask
module.exports.deleteTask=deleteTask