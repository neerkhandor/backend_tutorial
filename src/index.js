//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
// import mongoose  from "mongoose";
// import { DB_NAME } from "./constant";
// import express from "express" 
import connectDB from "./db/index.js"
dotenv.config({
    path:'./env'
})

connectDB()

// 2nd approach alag se ek file le wahape saara code likhe waha se export karke index file mein import kar denge
// we try that as early it is possible we load the environment variables

/*
// kai baar kya hota hai isi file mein express initialize kar lete hai
// aap kya dikhega kai baar ki jaise hi connect ho chuka hia ki next line mein listeners laga sakte hai
// ye ek acha method hai aapne pura apna db ka connection ek hi file mein likh 
// rakha hai bahar kuch pollute nahi kiya hai but thoda index file zyada pollute hogaya hai

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        app.on("error",(error)=>{
            console.log("ERR: ",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error",error);
        throw error;
    }
})()
*/