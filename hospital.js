const express = require('express')
const app=express()
app.use(express.json())
app.listen('3000',function(req,res){
    console.log("server started on port 3000")
})

const users=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}]

app.get('/',function(req,res){
    const johnKidneys = users[0].kidneys
    const numberofjohnKidneys=johnKidneys.length
    const healthyKidneys = johnKidneys.filter(function(kidneys){
        return kidneys.healthy!=false
        

    })
    const numberofhealthyKidneys=healthyKidneys.length
  


    const unhealthyKidneys=numberofjohnKidneys-numberofhealthyKidneys   
    res.json({
        numberofjohnKidneys,
        numberofhealthyKidneys,
        unhealthyKidneys,
    })

})
app.post('/',function(req,res){
    const isHealthy=req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy})
    res.json({
        msg:"Done"
    })
})
app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true
    }
    res.send("kidney purification done")
    
})
app.delete('/',function(req,res){
    const getdeletekidneys=users[0].kidneys
    const deletekidn=getdeletekidneys.filter(kidn=>kidn.healthy==true)
    users[0].kidneys=deletekidn
    res.send("unhealthy kidney deleted succesfully")
    })