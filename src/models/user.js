const mongoose = require('mongoose')
const validator = require('validator')

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

Userschema.pre('save',async function(next){
    const user=this
    console.log('just before saving')
    next()
})

const User = mongoose.model("User", Userschema)
module.exports=User