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

/*
  CREATE TABLE `eurovision`.`countries`
  ( `ID` INT(11) NOT NULL AUTO_INCREMENT ,
  `Name` VARCHAR(60) NOT NULL ,
  `Flag` VARCHAR(11) NOT NULL ,
  `Voted` BOOLEAN NOT NULL DEFAULT FALSE ,
  `Score` INT(11) NULL DEFAULT '0' ,
  PRIMARY KEY (`ID`))
  ENGINE = InnoDB;
*/
