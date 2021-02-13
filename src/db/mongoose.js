 const mongoose = require('mongoose')
 mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
     useNewUrlParser:true,
     useCreateIndex:true
 })

// const User = mongoose.model("User",{
//     name:{
//         type:String
//     },
//     age:{
//         type:Number
//     }
// })
// const me=new User({
//     name:"Manja",
//     age:21
// })
// me.save().then((me)=>{
//     console.log(me)
// }).catch((err)=>{
//     console.log(err)
// })

const Task=mongoose.model('Tasks',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})
const me=new Task({
    description:"clean macbook its avvvv dusty",
    completed:false
})
me.save().then((me)=>{
    console.log(me)
}).catch((err)=>{
    console.log(err)
})