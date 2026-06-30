const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@cluster0.nlj23qg.mongodb.net/TodoApplication")

const TodoSchema = new mongoose.Schema({
    title:String,
    description:String
})

const CreateTodo = new mongoose.model('CreateTodo',TodoSchema)

module.exports=CreateTodo