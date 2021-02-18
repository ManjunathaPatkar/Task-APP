const express=require('express')

require("./db/mongoose")

const UserRouter=require("../src/routers/user")

const User = require("./models/user")

const Task=require("./models/task")

const app = express() 

const port = process.env.PORT||3000

app.use(express.json())
app.use(UserRouter)

app.patch("/tasks/:id",async(req,res)=>{
    const allowedupdates=['description','completed']
    const updates=Object.keys(req.body)
    const isValidOperation= updates.every((update)=>{
        return (allowedupdates.includes(update))
    })
    if(!isValidOperation){
        return res.status(400).send({
            "error": "Invalid updates "
        })
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true,runValidators:true})
        if(!task){
            res.status(404).send()
        }
        res.send(task)
    }
    catch(err){
        res.status(400).send()
    }
})

app.delete("/users/:id",async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(404).send()
        }
        res.send(user)
    }
    catch(err){
        res.status(400).send()
    }
})

app.delete("/tasks/:id",async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            res.status(404).send()
        }
        res.send(task)
    }
    catch(err){
        res.status(400).send()
    }
})

app.listen(port,()=>{
    console.log("Server is up on "+port)
})