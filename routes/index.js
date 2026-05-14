var express = require('express');
var router = express.Router();

/**
 * @openapi
 * /:
 *   get:
 *     summary: Render the home page
 *     tags:
 *       - Root
 *     responses:
 *       '200':
 *         description: HTML homepage rendered by Jade
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
