const {mongoClient, ObjectId} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


// const id = new ObjectId()
// console.log(id._bsontype.length)
// console.log(id.getTimestamp())

// mongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
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

// mongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
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