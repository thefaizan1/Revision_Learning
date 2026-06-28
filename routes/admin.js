const {Router} = require('express')
const adminMiddleware = require('../middlewares/admin');
const { Admin, Course } = require('../db');
const router = Router();

router.post('/courses',adminMiddleware,async function(req,res){
const title=req.body.title
const desc=req.body.desc
const price=req.body.price

Course.create({
    title:title,
    description:desc,
    price:price
})
res.status(200).json({
    msg:"Course created successfully"
})


})
router.post('/signup',async function(req,res){
    const username=req.body.username
    const password=req.body.password

    Admin.create({
        username:username,
        password:password
    })
    res.status(200).json({
        msg:"user created successfully"
})

})
module.exports=router