require('../src/db/mongoose')
const User = require('../src/models/user')


//returns the document state before updating
User.findByIdAndUpdate('62738c72d7f53f94073a9448',{age:30}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:30})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})