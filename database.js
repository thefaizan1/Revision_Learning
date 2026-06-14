const express=require('express')
const mongoose = require('mongoose')
const app=express()

app.use(express.json())


//database connection
mongoose.connect("Connection string(Can't show it here for obvious reasons)")

const User = mongoose.model('Users',{username:String,password:String})


app.post("/register",async function(req,res){
    const username = req.body.username;
    const pwd=req.body.password

    const existingUser = await User.findOne({username:username})
    if(existingUser){
        return res.status(400).send("User already Exists")
    }
    else{
        const user =new User({
        username:username,
        password:pwd
        })
        user.save()
        res.json({
            msg:"User Saved successfully"
        })
    }

})


app.listen('3000',function(){
    console.log("Server started on port 3000")
})



