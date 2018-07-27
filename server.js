const express= require("express");
const path = require('path');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var query={"id":null};
var soi={soi:true}
var newValue={$set:soi};
var unsetSoi={$unset:soi}

app.use(express.static(path.join(__dirname,'dist/HKangular4app')));

app.get("/getgraphData",(req,res)=>{
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("graphdata");
        var graphdata={
            nodes:null,
            links:null
        };
        dbo.collection("nodes").updateOne(soi,unsetSoi,(req,res)=>{
            if(err) throw err;
            console.log("unset",res.result)
        })
        dbo.collection("nodes").updateOne(query,newValue,(req,res)=>{
            if(err) throw err;
            console.log("set",res.result)
        })
        //Find all documents in the customers collection:
        dbo.collection("nodes").find({}).toArray(function(err, result) {
          if (err) throw err;
          graphdata.nodes=result
        });

        dbo.collection("links").find({}).toArray(function(err, result) {
            if (err) throw err;
            graphdata.links=result
            res.send(JSON.stringify(graphdata));
            db.close();
        });
    });
})

app.get('*',(req,res)=>{
    query.id=req.query.id;
    res.sendFile(path.join(__dirname,'dist/HKangular4app/index.html'))
});

app.listen(8080,(req,res)=>{
    console.log("running ....")
})
