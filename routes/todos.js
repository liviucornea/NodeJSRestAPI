var todoList = require('../db/todosdb');

var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', function(req, res, next) {
    res.send(todoList);
});

module.exports = router;

