const express = require('express')
const app=express();
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')



//Middlewares
app.use(express.json())
app.use("/admin",adminRouter)
app.use('/user',userRouter)



app.listen('3000',function(){
    console.log('Server started on port 3000')
})