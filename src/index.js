const express=require('express')

require("./db/mongoose")

const User = require("./models/user")

const Task=require("./models/task")

const app = express() 

const port = process.env.PORT||3000

app.use(express.json())

app.post('/users',(req,res)=>{
    const user=new User(req.body)
    user.save().then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(404).send(err)
    })
    
})

app.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((err)=>{
        res.status(500).send()
    })
})

app.get('/users/:id',(req,res)=>{
    const id=req.params.id
    User.findById(id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((err)=>{
        res.status(500).send()
    })
})

app.post('/tasks',(req,res)=>{
    const task=new Task(req.body)
    task.save().then((task)=>{
        res.status(201).send(task)
    }).catch((err)=>{
        res.status(404).send()
    })
})

app.listen(port,()=>{
    console.log("Server is up on "+port)
})