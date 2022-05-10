const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks',(req,res)=>{
    const task = new Task(req.body)
    task.save().then(()=>{
        res.status(201).send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

router.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.status(200).send(tasks)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

router.get('/tasks/:id',(req,res)=>{
    const _id = req.params.id
    Task.findById(_id).then((task)=>{
        res.status(200).send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})


router.patch('/tasks/:id',async(req,res)=>{
    const allowedUpdates = ['description','completed']
    const updates = Object.keys(req.body)
    const isOperationValid = updates.every((update)=>allowedUpdates.includes(update))
    if(!isOperationValid){
        return res.status(400).send({error:'Invalid Updates!'})
    }
    try{
    const task = await Task.findById(req.params.id)
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




router.delete('/tasks/:id',async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.status(200).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router