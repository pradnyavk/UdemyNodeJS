const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users',(req,res)=>{
    const user = new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
    
})


router.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.status(200).send(users)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

router.get('/users/:id',(req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        res.status(200).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})

router.patch('/users/:id',async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','age','password']
    const isOperationValid = updates.every((update)=>allowedUpdates.includes(update))
    if(!isOperationValid){
        return res.status(400).send({error:'Invalid Updates!'})
    }
    try{
        //The options 'new' makes the function return the updated document instead of the old
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if (!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router