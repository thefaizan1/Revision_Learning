const mongoose = require('mongoose');
mongoose.connect('')

//Defining Schemas

const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});
const UserSchema = new mongoose.Schema({
    username:String,
    password:String

});
const CourseSchema= new mongoose.Schema({
    title:String,
    description:String,
    price:String,
}) 

const Admin = new mongoose.model('Admin',AdminSchema)
const User = new mongoose.model('User',UserSchema)
const Course = new mongoose.model('Course',CourseSchema)


module.exports={
    Admin,
    User,
    Course
}