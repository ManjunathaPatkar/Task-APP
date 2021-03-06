const express=require('express')
const router=express.Router()
const User = require("../models/user")

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    }
    catch (err) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }
    catch (err) {
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedupdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allowedupdates.includes(update)
    })
    if (!isValidOperation) {
        return res.status(400).send({ 'error': 'Invalid updates' })
    }

    try {
        const user=await User.findById(req.params.id)
        updates.forEach((update)=>user[update]=req.body[update])
        await user.save()
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    }
    catch (err) {
        res.status(400).send()
    }
})

router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    }
    catch (err) {
        res.status(400).send()
    }
})

router.post('/users/login',async(req, res)=>{
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send(user)
        }
    catch (err){
        res.status(400).send()
    }
    
})

module.exports=router