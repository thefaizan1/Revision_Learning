const { Admin } = require("../db")

async function adminMiddleware (req,res,next){
const username =req.headers.username
const pwd=req.headers.password

const user = await Admin.findOne({
    username:username
 })
 if(user){
    next();
 }
 else{
    res.status(403).json({
        msg:"Admin does not exist"
    })
 }



}
module.exports=adminMiddleware