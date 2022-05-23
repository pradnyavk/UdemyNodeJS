const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/tasks',auth,async(req,res)=>{
    // const task = new Task(req.body)
    const task = new Task({
        ...req.body,
        owner:req.user._id
    })
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
    // task.save().then(()=>{
    //     res.status(201).send(task)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
})

router.get('/tasks',auth,async(req,res)=>{
    try{
        //const tasks = await Task.find({})
        //const tasks = await Task.find({owner:req.user._id})
        await req.user.populate('tasks')
        res.status(200).send(req.user.tasks)
    }catch(e){
        res.status(400).send(e)
    }
    // Task.find({}).then((tasks)=>{
    //     res.status(200).send(tasks)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
})

router.get('/tasks/:id',auth,async(req,res)=>{
    const _id = req.params.id
    try {
        const task = await Task.findOne({_id,owner:req.user._id})
        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
    // Task.findById(_id).then((task)=>{
    //     res.status(200).send(task)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
})


router.patch('/tasks/:id',auth,async(req,res)=>{
    const allowedUpdates = ['description','completed']
    const updates = Object.keys(req.body)
    const isOperationValid = updates.every((update)=>allowedUpdates.includes(update))
    if(!isOperationValid){
        return res.status(400).send({error:'Invalid Updates!'})
    }
    try{
    const task = await Task.findOne({_id,owner:req.user._id})
    updates.forEach((update)=>task[update]=req.body[update])
    await task.save()
    //const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(!task){
        return res.status(404).send()
    }
    res.status(200).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})




router.delete('/tasks/:id',auth,async(req,res)=>{
    try{
        const task = await Task.findOneAndDelete({_id,owner:req.user._id})
        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router