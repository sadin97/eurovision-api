var mysql = require('mysql');

// Connection configurations.
const eurovision_db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eurovision'
});

// Connect to database.
eurovision_db.connect();

module.exports = eurovision_db;
