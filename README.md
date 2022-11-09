Create a simple express App which has 4 APIs. those APIs will help the TODo web application.

GET/retrieve the list of tasks
POST / create a new task
PUT /: id update the task of id id
DELETE /: id



Postman data: 
 Create Task:
 {
    "status": true,
    "msg": "Congrats! you have sucessfully created your today's task",
    "data": {
        "task": "Interview",
        "description": "Hi Avinay, today you have an interview with CtrlCampus",
        "status": "pending",
        "deletedAt": null,
        "isDeleted": false,
        "_id": "636ba5116199f5fe3502f065",
        "createdAt": "2022-11-09T13:03:13.710Z",
        "updatedAt": "2022-11-09T13:03:13.710Z",
        "__v": 0
    }
}

GETAllTASK deatils data:

{
    "status": true,
    "msg": "all the task details",
    "data": [
        {
            "_id": "636ba4a56199f5fe3502f061",
            "task": "Assignment",
            "description": "Hi Avinay today you hvae to give you assignment please remember",
            "status": "pending",
            "deletedAt": null,
            "isDeleted": false,
            "createdAt": "2022-11-09T13:01:25.944Z",
            "updatedAt": "2022-11-09T13:01:25.944Z",
            "__v": 0
        },
        {
            "_id": "636ba4e26199f5fe3502f063",
            "task": "Doctor appointment",
            "description": "Hi Avinay, today you have to go for check",
            "status": "pending",
            "deletedAt": null,
            "isDeleted": false,
            "createdAt": "2022-11-09T13:02:26.782Z",
            "updatedAt": "2022-11-09T13:02:26.782Z",
            "__v": 0
        },
        {
            "_id": "636ba5116199f5fe3502f065",
            "task": "Interview",
            "description": "Hi Avinay, today you have an interview with CtrlCampus",
            "status": "pending",
            "deletedAt": null,
            "isDeleted": false,
            "createdAt": "2022-11-09T13:03:13.710Z",
            "updatedAt": "2022-11-09T13:03:13.710Z",
            "__v": 0
        }
    ]
}

UPDATE TASK postman data:

  "msg": "your task!updated sucessfull",
    "data": {
        "_id": "636ba4e26199f5fe3502f063",
        "task": "Doctor",
        "description": "Hey, Avinay!you have done your doctor appointment",
        "status": "completed",
        "deletedAt": null,
        "isDeleted": false,
        "createdAt": "2022-11-09T13:02:26.782Z",
        "updatedAt": "2022-11-09T15:03:59.202Z",
        "__v": 0
    }
}

DeleteTask PostMan data:

{
    "status": true,
    "msg": " you have deleted your task",
    "data": {
        "_id": "636ba4e26199f5fe3502f063",
        "task": "Doctor",
        "description": "Hey, Avinay!you have done your doctor appointment",
        "status": "completed",
        "deletedAt": "2022-11-09T15:18:49.884Z",
        "isDeleted": true,
        "createdAt": "2022-11-09T13:02:26.782Z",
        "updatedAt": "2022-11-09T15:18:49.888Z",
        "__v": 0
    }
}
