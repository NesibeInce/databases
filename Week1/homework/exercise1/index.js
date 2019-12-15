var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

connection.connect();

connection.query('CREATE DATABASE IF NOT EXISTS company');

connection.query('USE company');

const table_query = [
  `CREATE TABLE IF NOT EXISTS employee (emp_no int, emp_name varchar(50), salary int, reports_to varchar(50));`,
  `CREATE TABLE IF NOT EXISTS departments (dept_no int, dept_name varchar(50), manager varchar(50));`,
  `CREATE TABLE IF NOT EXISTS projects  (proj_no int, proj_name varchar(50), starting_date datetime, ending_date datetime);`,
];

const employee_query = [
  `INSERT INTO employee VALUES(1, 'Ahmet Mustafa', '2500', 'Wouter Kleijn');`,
  `INSERT INTO employee VALUES(2, 'Mehmet Mustafa', '6500', 'Wouter Kleijn');`,
  `INSERT INTO employee VALUES(3, 'Kamil Cemal', '1500', 'Wouter Kleijn');`,
  `INSERT INTO employee VALUES(4, 'Ramazan Kalin', '2540', 'Noer Paanakker');`,
  `INSERT INTO employee VALUES(5, 'Uyur Gezer', '2333', 'Noer Paanakker');`,
  `INSERT INTO employee VALUES(6, 'Tarik Akan', '12500', 'Noer Paanakker');`,
  `INSERT INTO employee VALUES(7, 'Ahmet Kaya', '23500', 'Federico Fusco');`,
  `INSERT INTO employee VALUES(8, 'Harun Gunes', '2567', 'Federico Fusco');`,
  `INSERT INTO employee VALUES(9, 'Okhan Orhan', '2532', 'Tjebbe Schalij');`,
  `INSERT INTO employee VALUES(10, 'Selam Selamet', '1300', 'Tjebbe Schalij');`,
];

const departments_query = [
  `INSERT INTO departments VALUES(100, 'Account', 'Wouter Kleijn');`,
  `INSERT INTO departments VALUES(200, 'Human Resources', 'Tjebbe Schalij');`,
  `INSERT INTO departments VALUES(300, 'Fishing', 'Federico Fusco');`,
  `INSERT INTO departments VALUES(400, 'Education', 'Noer Paanakker');`,
  `INSERT INTO departments VALUES(500, 'Medicine', 'Ahmet Beyaz');`,
  `INSERT INTO departments VALUES(600, 'Customer', 'Ahmet Kara');`,
  `INSERT INTO departments VALUES(700, 'Sales', 'Ahmet Yesil');`,
  `INSERT INTO departments VALUES(800, 'Intern', 'Numan Gunes');`,
  `INSERT INTO departments VALUES(900, 'Communication', 'Selami Selami');`,
  `INSERT INTO departments VALUES(1000, 'Developer', 'Ayhan Yaman');`,
];

const project_query = [
  `INSERT INTO projects VALUES(111, 'APK', '2015-10-10', '2018-10-10');`,
  `INSERT INTO projects VALUES(222, 'Nevarneyok', '2015-08-10', '2018-02-12');`,
  `INSERT INTO projects VALUES(333, 'Bardak', '2015-05-10', '2019-12-12');`,
  `INSERT INTO projects VALUES(444, 'Kasik', '2015-08-10', '2017-12-12');`,
  `INSERT INTO projects VALUES(555, 'Catal', '2015-03-10', '2018-12-12');`,
  `INSERT INTO projects VALUES(666, 'Tabak', '2011-01-10', '2013-12-12');`,
  `INSERT INTO projects VALUES(777, 'Tava', '2015-01-10', '2019-12-12');`,
  `INSERT INTO projects VALUES(888, 'Tencere', '2015-12-10', '2016-12-12');`,
  `INSERT INTO projects VALUES(999, 'Kazan', '2015-10-30', '2018-12-12');`,
  `INSERT INTO projects VALUES(1010, 'Duduklu', '2015-10-20', '2017-12-12');`,
];

function executeQuery(arr) {
  for (var i in arr) {
    connection.query(arr[i], function(error, results, fields) {
      if (error) {
        throw error;
      }
    });
  }
}

executeQuery(table_query);
executeQuery(departments_query);
executeQuery(employee_query);
executeQuery(project_query);

connection.end();
