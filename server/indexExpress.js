const express=require("express");
const app=express();
const PORT=3000;

app.use(express.static(__dirname + "/views")); //using this to include effects of css and js file 
app.get("/talhaportfolio",(req,res)=>{
    // res.send("Hello Everyone");
    res.sendFile(__dirname + "/views/portfolio.html");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})