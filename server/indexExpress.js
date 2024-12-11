const express=require("express");
const app=express();
const PORT=3000;

app.use(express.static(__dirname + "/views")); //using this to include effects of css and js file 
app.get("/talhaportfolio",(req,res)=>{
    // res.send("Hello Everyone");
    res.sendFile(__dirname + "/views/portfolio.html");
})

app.get("/message",(req,res)=>{
    res.json({"message":"This is Talha"});
})

app.use((req,res,next)=>{
    const secretCode=req.query.secret;
    if(secretCode==="1234"){
        req.isAuthorized=true;
    }
    else{
        req.isAuthorized=false;
    }
    next();
});

app.get("/auth",(req,res)=>{
    if(req.isAuthorized){
        res.send("You are authorized");
    }
    else{
        res.send("Unauthorized");
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})