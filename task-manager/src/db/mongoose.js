const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true
})

const User = mongoose.model('User',{
    name: {
        type:String,
        required:true
    },
    age:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name:'Pradnya',
    age:25
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log(error)
})


const Task = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task1 = new Task({
    description:'Car wash',
    completed:false
})

task1.save().then(()=>{
    console.log(task1)
}).catch((error)=>{
    console.log(error)
})