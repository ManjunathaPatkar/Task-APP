require("../src/db/mongoose")

const User=require("../src/models/user")

//6027d72ad73e72a9c947e54a

User.findByIdAndUpdate('6027d72ad73e72a9c947e54a',{age:30}).then((useer)=>{
    console.log(useer)
    return User.countDocuments({age:23})
}).then((users)=>{
    console.log(users)
}).catch((err)=>{
    console.log(err)
})