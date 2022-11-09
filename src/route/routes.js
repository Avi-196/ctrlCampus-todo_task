const express=require("express")

const router=express.Router()

const todoController=require("../Controller/todoController")

router.post("/newTask",todoController.createTask)

router.get("/getAllTask",todoController.getAllListofTasks)

router.put("/updateTask/:Id",todoController.updateTask)

router.delete("/deleteTask/:Id",todoController.deleteTask)






module.exports=router