import express from "express"
const app = express();
import dotenv from 'dotenv';
import authRouter from "./routes/auth.route.js";
import itemRouter from "./routes/item.route.js";
import cookieParser from "cookie-parser"

import cors from "cors"
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL ,
    credentials: true, 
  }))
  app.options("*", cors());

app.use("/api",itemRouter);
app.use("/api/auth",authRouter)

export default app;