require("../src/db/mongoose")

const { findByIdAndDelete, countDocuments } = require("../src/models/task")
const Task=require("../src/models/task")

// Task.findByIdAndDelete('602a9c369767ef24d449489f').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((task2)=>{
//     console.log(task2)
// }).catch((err)=>{
//     console.log(err)
// })

const deleteTaskAndCount=async (id,completed)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed})
    return count
}
deleteTaskAndCount('602a98347e8fcc216cefa872',false).then((count)=>{
    console.log(count)
}).catch((err)=>{
    console.log(err)
})