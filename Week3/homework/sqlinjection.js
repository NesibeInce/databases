function getPopulation(cityOrCountry, name, cb) {
  // assuming that connection to the database is established and stored as conn
  // Question1
  // since the connection is established then with 
  conn.query('INSERT INTO CityOrCountry Values('
    London ', 1234569)');
  conn.query(
    // Question 2
    //changing the variables with question marks will solve the problem
    `SELECT Population FROM ? WHERE Name = ?`, [cityOrCountry, name],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}