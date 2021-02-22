const mysql = require('mysql');

module.exports = connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Constantine123',
  database: 'review'
})

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('successfully connected to mysql-review')
})

