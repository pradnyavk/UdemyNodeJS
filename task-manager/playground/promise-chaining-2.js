require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('626f70cf8c2cabc8340f3168').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})