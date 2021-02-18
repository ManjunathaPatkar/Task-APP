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

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    }
    catch (err) {
        res.status(404).send()
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    }
    catch (err) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', async (req, res) => {
    const id = req.params.id
    try {
        const task = await Task.findById(id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
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
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    }
    catch (err) {
        res.status(400).send()
    }
})

module.exports=router