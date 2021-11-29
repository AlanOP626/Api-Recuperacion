const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@47570912As',
    database: 'gimnasio',
    
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Ahora estamos en Linea');
    }
  });

  module.exports = mysqlConnection;