const express = require('express')
const zod=require('zod')
const app=express()

app.use(express.json())

const schema = zod.array(zod.number())
app.post("/hp",function(req,res){
    const kidneys=req.body.kidneys
    const response = schema.safeParse(kidneys) 
    res.send({
        response
    })
})
















app.listen('3000',function(){
    console.log("server started on port 3000")
})
