var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'company_hyf'
});

connection.connect(err => {
  if (err) console.log(err);
});

const joinQuery = [
  `Select emp.full_name AS employee_name, dep.manager_name 
  FROM employee AS emp 
  LEFT JOIN department AS dep 
  ON emp.manager = dep.manager;`,
  `Select emp.full_name AS employee_name, dep.title AS Department_name
  FROM employee AS emp 
  RIGHT JOIN department AS dep 
  ON emp.manager = dep.manager;`
];

function executeQuery(arr) {
  for (var i in arr) {
    connection.query(arr[i], function (error, results, fields) {
      if (error) {
        throw error;
      }
      console.log('\n');
      console.log(fields[0].name, fields[1].name);
      for (let i in results) {
        console.log(Object.values(results[i]))
      }
    });
  }
}

executeQuery(joinQuery);
connection.end();