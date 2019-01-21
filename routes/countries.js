var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET countries listing. */
router.get('/', function(req, res, next) {
  db.query('SELECT * FROM countries', function (error, results, fields) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'List of all countries.' });
  });
});

module.exports = router;
