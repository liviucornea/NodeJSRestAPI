var todoList = require('../db/todosdb');

var express = require('express');
var router = express.Router();

/**
 * @openapi
 * /todos:
 *   get:
 *     summary: Get all todos
 *     tags:
 *       - Todos
 *     responses:
 *       '200':
 *         description: A list of todo items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/', function (req, res, next) {
  res.send(todoList);
});

module.exports = router;
