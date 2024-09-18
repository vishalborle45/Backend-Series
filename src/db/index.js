import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connect_DB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    }catch(err){
        console.log("mongoDb connection error",err)
        process.exit(1)
        // throw err
    }

}

export default connect_DB;