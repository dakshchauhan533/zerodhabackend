require('dotenv').config({path:"../.env"});
const mongoose = require("mongoose"); 
let {Positionmodel} = require("../models/Positionmodel");
const data = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];
  
  
  const url = process.env.MONGO_URL;



async function main(){
    await mongoose.connect(url);
}

main().then(()=>{
    console.log("connected to database");
}).catch(err=>console.log(err));


const initdb = async ()=>{
    await Positionmodel.insertMany(data);
    console.log("saved in db");
}
initdb();