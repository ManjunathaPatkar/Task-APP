const express=require('express')

require("./db/mongoose")

const UserRouter=require("../src/routers/user")

const  TaskRouter=require("../src/routers/task")

const User = require("./models/user")

const Task=require("./models/task")

const app = express() 

const port = process.env.PORT||3000

app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)


app.listen(port,()=>{
    console.log("Server is up on "+port)
})