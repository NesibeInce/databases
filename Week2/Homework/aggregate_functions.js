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

const aggQuery = [
  `SELECT dep.dept_no, COUNT(*) AS number_of_employee FROM employee AS emp LEFT JOIN department AS dep ON emp.manager = dep.manager GROUP BY dep.dept_no;`,
  `SELECT SUM(emp.salary) AS Total_Salaries FROM employee AS emp;`,
  `SELECT AVG(emp.salary) AS AVERAGE_Salary FROM employee AS emp;`,
  `SELECT dep.dept_no, SUM(emp.salary) AS Total_Salary_Per_Dep FROM employee AS emp LEFT JOIN department AS dep ON emp.manager = dep.manager GROUP BY dep.dept_no;`,
  `SELECT dep.dept_no, MAX(emp.salary) AS Maximum_Salary, MIN(emp.salary) AS Minimum_Salary FROM employee AS emp LEFT JOIN department AS dep ON emp.manager = dep.manager GROUP BY dep.dept_no;`,
  `SELECT emp.salary, COUNT(emp.salary) AS frequency_of_salaries FROM employee AS emp GROUP BY emp.salary;`
];

function executeQuery(arr) {
  for (var i in arr) {
    connection.query(arr[i], function (error, results, fields) {
      if (error) {
        throw error;
      }
      console.log('\n');
      for (i in fields) {
        console.log(fields[i].name);
      };
      for (let i in results) {
        console.log(Object.values(results[i]))
      }
    });
  }
}

executeQuery(aggQuery);
connection.end();