const express = require('express')
const app = express();
const router = require('./routes/todoroute')

//Middleware
app.use(express.json())
app.use("/todo",router)





app.listen('3000',function(){
    console.log("Server started on port 3000")
})