const express= require("express");
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var query={"id":null};
var soi={soi:true}
var newValue={$set:soi};
var unsetSoi={$unset:soi}

app.use(express.static(path.join(__dirname,'dist/HKangular4app')));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

app.post("/getgraphData", /* express.bodyParser(), */(req,res)=>{
    if(req.body.id !== null && req.body.id !==undefined && req.body.id !== "null"){
        query.id=req.body.id;
    }
    //console.log(req.body.id);
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("graphdata");
        var graphdata={
            nodes:null,
            links:null,
            soi:null
        };
        dbo.collection("nodes").updateOne(soi,unsetSoi,(req,res1)=>{
            if(err) throw err;
            console.log("unset",res1.result)
        })
        dbo.collection("nodes").updateOne(query,newValue,(req,res2)=>{
            if(err) throw err;
            console.log("set",res2.result);
            //Find all documents in the nodes collection:
            dbo.collection("nodes").find({}).toArray(function(err, result) {
                if (err) throw err;
                dbo.collection("nodes").find(soi).toArray(function(err, result) {
                    if (err) throw err;
                    graphdata.soi=result
                    console.log(result);
                });
                graphdata.nodes=result 
            });
            //Find all documents in the links collection:
            dbo.collection("links").find({}).toArray(function(err, result) {
                if (err) throw err;
                graphdata.links=result;
                res.send(graphdata);
                db.close();
            }); 
        })
    });
})

app.get('*',(req,res)=>{
    console.log(req.query)
    if(req.query.id!==null && req.query.id!==undefined){
        query.id=req.query.id;
    }
    res.sendFile(path.join(__dirname,'dist/HKangular4app/index.html'))
});

app.listen(8080,(req,res)=>{
    console.log("running ....")
})
