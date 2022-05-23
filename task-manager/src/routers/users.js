const express = require('express')
const auth = require('../middleware/auth')
const User = require('../models/user')
const router = new express.Router()

router.post('/users',async(req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
    }


    // user.save().then(()=>{

    //     res.status(201).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
    
})

router.post('/users/login',async (req,res)=>{
    try{
    const user = await User.findByCredentials(req.body.email,req.body.password)
    const token = await user.generateAuthToken()
    res.status(200).send({user,token})

    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/users/logoutall',auth,async(req,res)=>{
    try {
        req.user.tokens = []
        req.user.save()
        res.status(200).send()
    } catch (e) {
        res.status(500).send(e)        
    }
})

// router.get('/users',auth,async(req,res)=>{
//     try{
//         const users = await User.find({})
//         res.status(200).send(users)
//     }catch(e){
//         res.status(400).send(e)
//     }

//     // User.find({}).then((users)=>{
//     //     res.status(200).send(users)
//     // }).catch((e)=>{
//     //     res.status(400).send(e)
//     // })
// })

router.get('/users/me',auth,async(req,res)=>{
    try{
        res.status(200).send(req.user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/users/logout',auth,async(req,res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
    // User.findById(_id).then((user)=>{
    //     res.status(200).send(user)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
})

router.patch('/users/me',auth,async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','age','password']
    const isOperationValid = updates.every((update)=>allowedUpdates.includes(update))
    if(!isOperationValid){
        return res.status(400).send({error:'Invalid Updates!'})
    }
    try{

        //middlewares bypass the findByIdAndUpdate fuction hence recoding
        const user = req.user

        updates.forEach((update)=> user[update] = req.body[update])

        await user.save()


        //The options 'new' makes the function return the updated document instead of the old
        // const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        // if (!user){
        //     return res.status(404).send()
        // }
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/me',auth,async(req,res)=>{
    try{
        // const user = await User.findByIdAndDelete(req.user._id)
        // if(!user){
        //     return res.status(404).send()
        // }
        // res.status(200).send(user)

        await req.user.remove()
        res.status(200).send(req.user)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router