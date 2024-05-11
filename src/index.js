//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 7000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connecction failed ",err)
})











/*
import express from "express"
const app=express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("err",(err)=>{
            console.log("Error : ",err)
            throw err
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app lis listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error : ",error)
        throw error
    }
})()
*/