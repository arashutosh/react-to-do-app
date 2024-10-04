const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todos } = require('./db');
const app = express();
app.use(express.json());
app.post('/todo',async function(req, res){
    const userBody = req.body;
    const payload = createTodo.safeParse(userBody);
    if(!payload.success){
        res.status(411).json({
            msg: "your inputs are wrong"
        });
        return;
    }
    await todos.create({
        title: userBody.title,
        description: userBody.description,
        isCompleted: false
    })
    res.status(200).json({
        msg: "todo is created"
    })
});
app.post('/todos',async function(req, res){
    const getData = await todos.find({})
    res.status(200).json({
        getData
    }) 
});
app.put('/compelete', async function(req, res){
    const todoId = req.body;
    const abc = updateTodo.safeParse(todoId);
    if(!abc.success){
        res.status(411).json({
            msg: "this id does not exist"
        });
        return;
    }
    await todos.findOneAndUpdate({
        _id: todoId
    },{
        isCompleted: true
    })
    res.status(200).json({
        msg: "todo marked as completed"
    })
});
app.listen(3000,()=>{
    console.log("server is running at PORT 3000")
})