import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import { connectDB } from "./config/database.config.js";
const Port = process.env.PORT || 3000;




app.listen(Port,(res,req)=>{
    console.log(`Server is running on the port:${Port}`);
    connectDB();
})