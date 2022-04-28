const { MongoClient, ObjectId} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


// const id = new ObjectId()
// console.log(id._bsontype.length)
// console.log(id.getTimestamp())

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//        return console.log('Unable to connect to database')
//     }
//     const db = client.db(databaseName)
//     db.collection('users').insertMany([{
//         name:'Vishal',
//         age:30
//     },
// {
//     name:'Pradnya',
//     age:25
// }],(error,result)=>{
//         if(error){
//             return console.log('Unable to insert data')
//         }
//         console.log(result)
//     })
// })

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log('Unable to connect')
//     }
//     const db = client.db(databaseName)
//     db.collection('tasks').insertMany([
//         {
//             description:'Complete section 10',
//             completed:false
//         },
//         {
//             description:'Ask hr about dependency form',
//             completed:true
//         },
//         {
//             description:'Complete chapter 9',
//             completed:true
//         }
//     ],(error,result)=>{
//         if(error){
//             return console.log('Unable to insert the documents')
//         }
//         console.log(result)
//     })
// })

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
       return console.log('Unable to connect')
    }
    const db = client.db(databaseName)
    db.collection('users').findOne({name:'Pradnya'},(error,user)=>{
        if(error){
            return console.log('Unable to find data')
        }
        console.log(user)
    })

    db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
        if(error){
            return console.log('Unable to find matching data')
        }
        console.log(tasks)
    })

    db.collection('tasks').findOne({_id:new ObjectId("626ac19b43644478e8fd7e6a")},(error,task)=>{
        if(error){
            return console.log('unable to find matching data')
        }
        console.log(task)
    })
})
