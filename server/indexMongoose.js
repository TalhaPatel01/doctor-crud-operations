import express from "express";
import bodyParser from "body-parser";
// import path from "path";
// import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";

import route from "./routes/doctorRoute.js";

dotenv.config();

const app=express();
const PORT = process.env.PORT;
const URL = process.env.MONGODB_URL;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


 mongoose.connect(URL, {useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>{console.log("DB connected successfully");
    app.listen(PORT,()=>{
        console.log(`Listening at port http://localhost:${PORT}`);
    });
  })
  .catch((err)=>{console.error("Connection failed:",err)});

//   const createDoctor = async ()=>{
//     const doctor=new Doctor({
//       name:"Talha",
//       specialization:"Eye Surgeon",
//       phone_number:"123456",
//       location:"Bharuch",
//       hospital_name:"Classic Hospital"
//     })
//     const result = await doctor.save();
//     console.log("doctor is created",result);
//   }
// createDoctor();

app.use('/api',route);