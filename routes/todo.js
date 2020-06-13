var todoList = require('../db/todosdb');

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    // console.log('Request object is', req);
    // console.log('Request base url is is', req.baseUrl);
    //console.log('Params passed to get tod are', req.params);
    // console.log('To Do id to search for is:', id);
    // console.log('Todos list is', todoList);
    let todo = todoList.find(todo=> todo.id === id);
       if (todo) {
            return res.status(200).send({
                success: 'true',
                message: 'todo retrieved successfully',
                todo,
            });
        }else{
            return res.status(404).send({
                success: 'false',
                message: 'todo does not exist',
            });
        }


});

module.exports = router;




