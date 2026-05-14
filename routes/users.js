var usersList = require('../db/usersListdb');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(usersList);
});

module.exports = router;
