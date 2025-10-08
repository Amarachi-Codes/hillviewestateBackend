import express from 'express'
import dotenv from 'dotenv' 
import configuration from './config/config.js';
import cors from "cors";
import console = require('console');
import userRouter from './route/user.routes.js';

dotenv.config();

const portEnv = Number(configuration.app.port);

if(!portEnv){
    console.log("Error: PORT is not detected in .env file");
    process.exit(1);
}

const PORT: number = portEnv;

if (isNaN(PORT)){
    console.log("Error: PORT is not a number in .env file");
    process.exit(1);

}

const app = express ();

app.use("/api/v1/users", userRouter);

app.listen(PORT, ()=>{
    console.log(`The server is up and running at ${PORT}`);
    
})

