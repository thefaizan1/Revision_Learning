const express = require('express')
const bodyParser=require('body-parser')
const app = express()
app.use(express.json())


app.listen('3000',function(){
console.log('Server started on port 3000');
})

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/conversations',(req,res)=>{
    console.log(req.body)
})