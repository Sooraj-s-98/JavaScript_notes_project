const express=require("express");
const app=express();
const Post=require("./api/models/posts")
const postData=new Post();

app.get("/api/posts",(req,res)=>{
    res.status(200).send(postData.get());
});

app.listen(3000,()=>console.log("Listening on http://localhost:3000"))