 const mongoose = require('mongoose')
//  const validator=require('validator')
 mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
     useNewUrlParser:true,
     useCreateIndex:true,
     useFindAndModify:false
 })

// const User = mongoose.model("User",{
//     name:{
//         type:String,
//         required:true,
//         default:'Anonymous',
//         trim:true
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error("Age cannot be negative")
//             }
//         }
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Email invalid")
//             }
//         }
//     },
//     password:{
//         type:String,
//         required:true,
//         minlength:7,
//         trim:true,
//         validate(value){
//             if (value.toLowerCase().includes('password')){
//                 throw new Error("Password should not contain password")
//             }
//         }
//     }
// })
// const me=new User({
//     name:"    Manja Patkar   ",
//     age:23,
//     email:'manja@gmail.com       ',
//     password:'manjapatkar   '
// })
// me.save().then((me)=>{
//     console.log(me)
// }).catch((err)=>{
//     console.log(err)
// })

// const Task=mongoose.model('Tasks',{
//     description:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })
// const me=new Task({
//     description:"clean macbook its avvvv dusty",
//     completed:false
// })
// me.save().then((me)=>{
//     console.log(me)
// }).catch((err)=>{
//     console.log(err)
// })