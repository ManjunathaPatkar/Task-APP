require("../src/db/mongoose")

const { count } = require("../src/models/user")
const User=require("../src/models/user")

//6027d72ad73e72a9c947e54a

// User.findByIdAndUpdate('6027d72ad73e72a9c947e54a',{age:30}).then((useer)=>{
//     console.log(useer)
//     return User.countDocuments({age:23})
// }).then((users)=>{
//     console.log(users)
// }).catch((err)=>{
//     console.log(err)
// })

const findandUpdateandCount=async (id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age})
    const count=await User.countDocuments({age:23})
    return count
}
findandUpdateandCount('6027d72ad73e72a9c947e54a',30).then((count)=>{
    console.log(count)
}).catch((err)=>{
    console.log(err)
})