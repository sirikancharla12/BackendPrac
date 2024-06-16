require('dotenv').config();

const express=require("express");
const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const app=express();

mongoose.connect(process.env.MONGODB_URL)

app.use(express.json())
console.log(process.env.JWT_PASS)
app.post("/post",(req,res)=>{
    res.json("here u are!!")
})

app.listen(process.env.PORT)