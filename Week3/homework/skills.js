var mysql = require('mysql');
var table = require('./table');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'company',
});

connection.connect(err => {
  if (err) console.log(err);
});

connection.query(
  'CREATE TABLE IF NOT EXISTS technical_skills (emp_no INT, backend VARCHAR(25), frontend VARCHAR(25), other VARCHAR(25), PRIMARY KEY (emp_no))',
);
connection.query(
  'CREATE TABLE IF NOT EXISTS soft_skills (emp_no INT, team_work INT, communication INT, problem_solving INT, PRIMARY KEY (emp_no))',
);
connection.query(
  'CREATE TABLE IF NOT EXISTS language_skills (emp_no INT, mother_tongue VARCHAR(25), second_language VARCHAR(25), third_language VARCHAR(25), PRIMARY KEY (emp_no))',
);

var techList = [];

for (i in table.technical_skills) {
  var row = table.technical_skills[i].split(',');
  var newObj = {
    emp_no: row[0],
    backend: row[1],
    frontend: row[2],
    other: row[3],
  };
  techList.push(newObj);
}

var softList = [];

for (i in table.soft_skills) {
  var row = table.soft_skills[i].split(',');
  var newObj = {
    emp_no: row[0],
    team_work: row[1],
    communication: row[2],
    problem_solving: row[3],
  };
  softList.push(newObj);
}

var languageList = [];

for (i in table.language_skills) {
  var row = table.language_skills[i].split(',');
  var newObj = {
    emp_no: row[0],
    mother_tongue: row[1],
    second_language: row[2],
    third_language: row[3],
  };
  languageList.push(newObj);
}

console.log(softList);
console.log(techList);
console.log(languageList);

function skillQuery(arr) {
  var query = `INSERT INTO employee SET ?`;
  techList.forEach(element => {
    connection.query(query, element, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('new row inserted');
      }
    });
  });
}

var list = [techList, softList, languageList];
list.forEach(array => skillQuery(array));

connection.end();