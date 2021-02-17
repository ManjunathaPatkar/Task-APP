require("../src/db/mongoose")

const Task=require("../src/models/task")

Task.findByIdAndDelete('602a9c369767ef24d449489f').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((task2)=>{
    console.log(task2)
}).catch((err)=>{
    console.log(err)
})