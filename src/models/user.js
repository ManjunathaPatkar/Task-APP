const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const Userschema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Anonymous',
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error("Age cannot be negative")
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error("Password should not contain password")
            }
        }
    }
})

Userschema.statics.findByCredentials=async(email, password)=>{
    const user=await User.findOne({email})
    if(!user){
        throw new Error("unable to login")
    }
    const isMatched=await bcrypt.compare(password,user.password)
    if(!isMatched){
        throw new Error('unable to login')
    }
    return user
}

Userschema.pre('save',async function(next){
    const user=this
    // console.log('just before saving')
    if(user.isModified('password')){
       user.password=await bcrypt.hash(user.password,8) 
    }
    next()
})



const User = mongoose.model("User", Userschema)
module.exports=User