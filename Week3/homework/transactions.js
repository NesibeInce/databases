const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'company',
});

async function flatify(dept_no, emp_no) {
  try {
    await connection.connect();
    await connection.query(`START TRANSACTION`);
    const managerName = await connection.query(`SELECT manager FROM departments WHERE dept_no = ?`, dept_no);
    const newReportsTo = await connection.query(`SELECT emp_name FROM employee WHERE emp_no = ?`, emp_no);
    await connection.query(`UPDATE employee SET reports_to = ${newReportsTo} WHERE reports_to = ${managerName}`);
    await connection.query(`COMMIT`);
  } catch (error) {
    console.error(error);
    await execQuery('ROLLBACK');
  }
  connection.end();
}

flatify(100, 1);