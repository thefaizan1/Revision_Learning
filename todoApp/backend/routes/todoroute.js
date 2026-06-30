const { Router } = require("express");
const Todo = require("../types")
const router = Router();
const CreateTodo = require('../db/db')

//Actual Implementation
router.get("/posts", async function (req, res) {
    const todos =  await CreateTodo.find({})
    res.json({
        todos
    })

})

router.post("/todos", async function (req, res) {
    const createPayload = req.body;
    const ParsedPayload = Todo.safeParse(createPayload);
    if (!ParsedPayload) 
    {
        res.status(411).json({
        msg: "Wrong Inputs",
        });
        return
        }
    else
    {
       const TodoId = await CreateTodo.create(ParsedPayload.data)
        res.json({msg:"Todo created successfully"})
        console.log(TodoId._id)
    }
});

router.put("/completed", function (req, res) {});

module.exports = router;
