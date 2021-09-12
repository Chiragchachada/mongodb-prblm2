const express = require("express");
const quotesDetailsModel = require("../models/quoteDetailsModel");
// create instance of express
const router = express.Router();


//POST API

router.post("/quote/add", async function(req, res){
console.log("req.body", req.body);
try {
    const dataCreation = await  quotesDetailsModel.create(req.body);
    console.log("dataCreation", dataCreation);
    res.send({"result": "Data added successfully"});

} catch(error){
    console.log("error occured", error);
}
});

//GET API

router.get("/getall", async function(req, res){
    try{
        const getquotesDetails = await  quotesDetailsModel.find({},{__v:0, _id:0 });
        console.log("data from database", getquotesDetails);
        res.send({reult: getquotesDetails});
    } catch(error){
        console.log("error occured", err);
    }
    
});

module.exports = router;