const mongoose = require("mongoose");

const quotesDetailsSchema = new mongoose.Schema({
    "quote":String,
    "author": String
},
{
    collection : "quotesDetailsCollection"
})


const quotesDetailsModel = mongoose.model("quotesDetailsModel", quotesDetailsSchema);
module.exports = quotesDetailsModel;
    