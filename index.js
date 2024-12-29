require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 8001;
const app = express();
const url = process.env.MONGO_URL;
const mongoose = require("mongoose");





app.listen(port,()=>{
console.log(`server running on port ${port}`);mongoose.connect(url).then(()=>{
    console.log("db connected");
});
})