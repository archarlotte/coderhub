const mysql = require('mysql2');

const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: 'admin',
  connectionLimit: 5,
});

// check if connect successfully
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log('failed', err);
    return;
  }

  connection.connect((err) => {
    err ? console.log('failed', err) : console.log('database success');
  });
});

const connection = connectionPool.promise();

module.exports = connection;
