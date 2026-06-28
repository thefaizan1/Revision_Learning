const {Router} = require('express')
const userMiddleware = require('../middlewares/user');
const { User } = require('../db');
const router = Router();

router.post('/signup',userMiddleware,async function(req,res){
    const username=req.body.username
    const pwd = req.body.password
    User.create({
        username:username,
        password:pwd
    })
    res.json({
        msg:"User created successfully"
    })
})


module.exports = router