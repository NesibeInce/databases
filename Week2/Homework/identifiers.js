var mysql = require('mysql');
var table = require('./table');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

connection.connect(err => {
  if (err) console.log(err);
});

connection.query('CREATE DATABASE IF NOT EXISTS company_hyf');

connection.query('USE company_hyf');
connection.query('CREATE TABLE IF NOT EXISTS employee (employee_no INT, full_name VARCHAR(25), salary INT(6), address VARCHAR(200), manager INT,PRIMARY KEY (employee_no))');

let newList = [];

for (i in table.employee) {
  let row = table.employee[i].split(",");
  let newObj = {
    employee_no: row[0],
    full_name: row[1],
    salary: row[2],
    address: row[3],
    manager: row[4]
  }
  newList.push(newObj);
};

const query = `INSERT INTO employee SET ?`;
newList.forEach(element => {
  connection.query(query, element, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log('new employee inserted');
    };
  })
});

// query to make manager as foreign key in employee table, but it is not working in this step
// since the department table is not created yet.
// connection.query('ALTER TABLE employee ADD FOREIGN KEY (manager) REFERENCES employee (employee_no)');

connection.end();