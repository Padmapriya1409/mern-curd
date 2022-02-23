const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config()
const app =express()


app.listen((process.env.PORT || 5000),()=>{
    console.log(`server connected on port `)
})

mongoose.connect(process.env.MONGO_DB,(err)=>{
    if(err)
        console.log(err)
    else console.log("DB connected")
})