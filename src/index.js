import mongoose  from "mongoose";
import { DB_NAME } from "./constant";

;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }
    catch(error){
        console.error("Error",error);
        throw error;
    }
})()