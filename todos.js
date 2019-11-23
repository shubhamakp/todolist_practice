const route = require('express').Router();
let todosss = [
    {task: "one task"},
    {task: "hello everyone"}
]
route.get('/', (req,res) => {
    res.render('todos',{todosss});
})

route.post('/',(req,res) =>{
todosss.push(
    {
        task: req.body.newTodo
    }
)
res.redirect('todos');
})

module.exports = route;