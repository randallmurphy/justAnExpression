const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid').v4;

let todos = [
  {
    id: uuidv4(),
    todo: "do laundry",
    done: "false"
  },
  {
    id: uuidv4(),
    todo: "wash dishes",
    done: "true"
  }
]


router.get('/get-all-todos', (req,res)=>{
    todos.push(todos)
})

router.get('/get-todo-by-id/:id', (req,res)=>{
    const todo = todos.find(todo => todo.id === req.params.id);
    if(!todo){
        return res.json({message: "Todo does not exist!"});
    }
    res.json(todo);

})

router.get('/get-todos-by-done/:done', (req,res)=>{
    const doneTodo = todos.filter(todo => todo.done === req.params.done);
    if(!doneTodo){
        return res.json({message: "Todo not done!"});
    }
    res.json(doneTodo);
    
})

router.post('/create-new-todo', (req,res)=>{
    const todo = req.body.todo;

    const newTodo = {
        id: uuidv4(),
        todo: todo,
        done: "true"
        
    }
    todos.push(newTodo);
    res.json(todos);
})











module.exports = router;