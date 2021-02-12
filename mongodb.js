const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'


// MongoClient.connect(connectionURL,{ useNewUrlParser:true},(err,client)=>{
//     if(err){
//         return console.log("Error")
//     }
//     const db=client.db(databaseName)

//     db.collection('users').insertOne({
//         name:'Manjunatha Patkar',
//         age:21
//     },(err,result)=>{
//         if(err){
//             return console.log("error while inserting")
//         }
//         console.log(result.ops)
//     })
// })

//inserting many
// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("Error connecting to databse")
//     }
//     const db=client.db(databaseName)
//     db.collection('users').insertMany([
//         {
//             name:'manja',
//             age:21
//         },
//         {
//             name:'admin',
//             age:23
//         }
//     ],(err,result)=>{
//         if(err){
//             return console.log("error inserting value")
//         }
//         console.log(result.ops)
//     })
// })
//Inseting 3
MongoClient.connect(connectionURL,{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log("Failed to connect to databse")
    }
    const db=client.db(databaseName)
    db.collection('tasks').insertMany([
        {
            description:'Clean the house',
            completed:true
        },
        {
            description:'Renew insepection',
            completed:false
        },
        {
            description:'Pot plants',
            completed: false
        }
    ],(err,result)=>{
        if(err){
            return console.log("faield to insert")
        }
        console.log(result.ops)
    })
})