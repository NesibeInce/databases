var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world'
});

connection.connect();

const queries = [
  `SELECT country.name, country.population FROM country WHERE country.population > 8000000;`,
  `SELECT country.name FROM country WHERE country.name LIKE '%land%';`,
  `SELECT city.name, city.population FROM city WHERE city.population > 500000 AND city.population < 1000000;`,
  `SELECT country.name FROM country WHERE country.Continent = 'Europe';`,
  `SELECT country.name, country.SurfaceArea FROM country ORDER BY country.SurfaceArea DESC;`,
  `SELECT city.name FROM city WHERE city.CountryCode = 'NLD';`,
  `SELECT city.Population FROM city WHERE city.name = 'Rotterdam';`,
  `SELECT country.name, country.SurfaceArea FROM country ORDER BY country.surfaceArea DESC LIMIT 10;`,
  `SELECT city.name, city.population FROM city ORDER BY city.population DESC LIMIT 10;`,
  `SELECT SUM(country.population) FROM country;`
];

const textForQueries = [
  'Countries which have more than 8 million as a population: ',
  'Countries that have "land" in their names: ',
  'Cities which have population in between 500,000 and 1 million: ',
  'All the countries in Europe: ',
  'Countries in the descending order based on their surface areas: ',
  'All the cities in the Netherlands: ',
  "Rotterdam's population is: ",
  'The top 10 largest countries: ',
  'Most populated 10 cities: ',
  'Population of the world is: '
];

for (let i in queries) {
  connection.query(queries[i], function (error, results, fields) {
    if (error) {
      throw error;
    }
    console.log('\n' + textForQueries[i]);
    for (let i in results) {
      console.log(Object.values(results[i]))
    }
  });
}

connection.end();