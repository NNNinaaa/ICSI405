const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbUrl = 'mongodb://appUser:LSBp9gN24k62hY8M@cluster0-shard-00-00-fsalh.mongodb.net:27017,cluster0-shard-00-01-fsalh.mongodb.net:27017,cluster0-shard-00-02-fsalh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
const Message = mongoose.model('Message',{ name : String, message : String});

mongoose.connect(dbUrl , (err) => {
  console.log('mongodb connected',err);
});

app.get('/',(req,res)=>{
    Message.find({},(err, messages)=> {
        res.send(messages);
    });
});
app.listen(3000,()=>{
  console.log("Server started on 127.0.0.1:4550...");
});