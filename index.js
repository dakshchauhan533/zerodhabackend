require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 8001;
const app = express();
const url = process.env.MONGO_URL;
const mongoose = require("mongoose");
const { Holdingmodel } = require("./models/Holdingmodel");
const { Positionmodel } = require("./models/Positionmodel");
let { Ordermodel } = require("./models/Ordermodel");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");




app.use(cors({
  origin: ['http://localhost:3000',
 'http://localhost:3001','https://zerodhafrontend.vercel.app/login','https://zerodhafrontend.vercel.app/signup'],  
  credentials: true,
}));  
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", authRoute);




app.post("/addorder", async (req, res) => {
  let data = new Ordermodel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode
  });


   await data.save();
 
 
});

app.get("/allholdings", async (req, res) => {
  let data = await Holdingmodel.find({});
  res.json(data);
});

app.get("/allpositions", async (req, res) => {
    let data = await Positionmodel.find({});
    res.json(data);
 });

app.listen(port, () => {
  console.log(`server running on port ${port}`);
  mongoose.connect(url).then(() => {
    console.log("db connected");
  });
});

