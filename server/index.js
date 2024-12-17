// const http= require("http");
// const server=http.createServer((req,res)=> {
//     if(req.method==='GET' && req.url==='/talha') {
//         res.writeHead(200,{'content-type':'text/plain'});
//         res.end("Hello Everyone!!!");
//     }
//     else {
//         res.writeHead(404,{'content-type':'text/plain'});
//         res.end("Not Found");
//     }
// });

// server.listen(3000,()=>{
//     console.log("Server is running on http://localhost:3000")
// })

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import dotenv from "dotenv";

dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post("/name",(req,res)=>{
    const fName=req.body.firstName;
    const lName=req.body.lastName;
    const fullName=fName+" "+lName;
    res.json({"name":fullName});
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})