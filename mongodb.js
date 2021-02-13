const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName ='task-manager'
const ObjectID=mongodb.ObjectID

// const id=new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

// console.log(id.id)
// console.log(id.id.length )

// console.log(id.toHexString().length)

// MongoClient.connect(connectionURL,{ useNewUrlParser:true},(err,client)=>{
//     if(err){
//         return console.log("Error")
//     }
//     const db=client.db(databaseName)


//     db.collection('users').insertOne({
//         name:'Manja Patkar',
//         age:22
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
// MongoClient.connect(connectionURL,{useNewUrlParser:true},(err,client)=>{
//     if(err){
//         return console.log("Failed to connect to databse")
//     }
//     const db=client.db(databaseName)
//     db.collection('tasks').insertMany([
//         {
//             description:'Clean the house',
//             completed:true
//         },
//         {
//             description:'Renew insepection',
//             completed:false
//         },
//         {
//             description:'Pot plants',
//             completed: false
//         }
//     ],(err,result)=>{
//         if(err){
//             return console.log("faield to insert")
//         }
//         console.log(result.ops)
//     })
// })
// MongoClient.connect(connectionURL,{useNewUrlParser:true},(err,client)=>{
//     if(err){
//         return console.log("Connection error!!!")
//     }
//     const db=client.db(databaseName)
//     // db.collection('users').findOne({name:'manja',age:21},(err,result)=>{
//     //     if(err){
//     //         return console.log("unable to fetch")
//     //     }
//     //     console.log(result)
//     // })
//     // db.collection('users').findOne({ _id: new ObjectID("602759c4c283c6686a5748db")},(err,result)=>{
//     //     if(err){
//     //         return console.log("unable to fetch")
//     //     }
//     //     console.log(result)
//     // })
//     // db.collection('users').find({name:'Manja Patkar'}).toArray((err,result)=>{
//     //     if(err){
//     //         console.log(err)
//     //     }
//     //     console.log(result)
//     // })
//     // db.collection('users').find({ name: 'Manja Patkar' }).count((err, count) => {
//     //     if (err) {
//     //         console.log(err)
//     //     }
//     //     console.log(count)
//     // })
//     db.collection('tasks').findOne({ _id: new ObjectID("6026a521e1c5cf5ca2dad3ae")},(err,result)=>{
//         if(err){
//             return console.log("error")
//         }
//         console.log(result)
//     })
//     db.collection('tasks').find({completed: false}).toArray((err,result)=>{
//         if(err){
//             return console.log("Error")
//         }
//         console.log(result)
//     })
// })
// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("Error connecting")
//     }
//     const db=client.db(databaseName)
//     db.collection('users').updateOne({ _id: new ObjectID("60275984342b316840c8cfc6")},
//     {
//         $set:{
//             name:'Ram'
//         }

//     }).then((result) => {
//             console.log(result)
//         }).catch((err)=>{
//             console.log(err)
//         })
  

// })
// MongoClient.connect(connectionURL,{useNewUrlParser:true},(err,client)=>{
//     if(err)
//     {
//         return console.log("Error connecting")
//     }
//     const db=client.db(databaseName)
//     db.collection('users').updateOne(
//         { _id: new ObjectID("60275984342b316840c8cfc6")},
//        {
//            $inc:{
//                 age:1
//            }
//        } ).then((result) => {
//            console.log(result)
//        }).catch((err)=>{
//            console.log(err);
//        })
// })
// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("Error while connecting")
//     }
//     const db=client.db(databaseName)
//     db.collection('tasks').updateMany(
//         {
//             completed: false
//         },
//         {
//             $set:{
//                 completed: true
//             }
//         }
//     ).then((result) => {
//         console.log(result)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
MongoClient.connect(connectionURL,{useNewUrlParser:true},(err,client)=>{
    if(err){
        return console.log("Error")
    }
    const db=client.db(databaseName)
    db.collection('users').deleteMany({age:23}).then((result) => {
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})