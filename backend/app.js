
import express from "express";
import userRoutes from "./routes/user-routes.js";

import cors from 'cors'
const app=express()
app.use(cors());
app.use(express.json())//JSON DATA FETCH
app.use('/', userRoutes)


const server=app.listen(1231,(err)=>{
    if(err){
        console.log("Server Crash", err)
    }
    else{
        console.log("Server Up and running", server.address())
    }
})