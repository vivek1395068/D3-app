const express= require("express");
const path = require('path');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(express.static(path.join(__dirname,'dist/HKangular4app')));

app.get("/getgraphData",(req,res)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("graphdata");
        //Find all documents in the customers collection:
        dbo.collection("graphdatas").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result)
          db.close();
        });
    });
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/HKangular4app/index.html'))
});

app.listen(8080,(req,res)=>{
    console.log("running ....")
})
