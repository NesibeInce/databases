var mysql = require('mysql');
var table = require('./table');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'company_hyf'
});

connection.connect(err => {
  if (err) console.log(err);
});

connection.query('CREATE TABLE IF NOT EXISTS department (dept_no INT, title VARCHAR(25), description VARCHAR(250), address VARCHAR(200), manager_name VARCHAR(25), manager INT, PRIMARY KEY (dept_no))');

let newList = [];

for (i in table.department) {
  let row = table.department[i].split(",");
  let newObj = {
    dept_no: row[0],
    title: row[1],
    description: row[2],
    address: row[3],
    manager_name: row[4],
    manager: row[5]
  }
  newList.push(newObj);
};

const query = `INSERT INTO department SET ?`;
newList.forEach(element => {
  connection.query(query, element, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log('new department inserted');
    };
  })
});

connection.end();