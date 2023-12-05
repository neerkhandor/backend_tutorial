import { mongoose } from "mongoose"
import DB_NAME from '../constant.js'
// nodejs gives access to process
// ye process hai na currrent application run horahi hogi uska reference hai
// mongoose aapko ek return object deta hai uss object ko aapko jo naam dena ho dedo
// and wo usko handle karlega
// so jobhi response aa raha hai aap usse variable ke andar hold kar rahe ho


const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected !! db host : ${connectionInstance.connection.host}`);
        // isse mujhe pata chalta hai ki mein konse host mein connect hua hu

    }
    catch(error){
        console.log("MongoDb connection failed ",error);
        process.exit(1)
    }
}
export default connectDB;