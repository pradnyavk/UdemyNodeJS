const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true
})

const User = mongoose.model('User',{
    name: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        minlength:7,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// const me = new User({
//     name:'   Pradnya',
//     email:'MYEMAIL@KJGKL.IO',
//     password:'    fsjda  '
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })


const Task = mongoose.model('Task',{
    description:{
        type:String,
        trim:true,
        required:true,

    },
    completed:{
        type:Boolean,
        default:false
    }
})

const task1 = new Task({
    description:'Car wash   '
})

task1.save().then(()=>{
    console.log(task1)
}).catch((error)=>{
    console.log(error)
})