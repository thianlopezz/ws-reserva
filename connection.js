var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: 'uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port:3306,
      user: 'aowzlb4xdjeq4681',
      password: 'mdznv8y5dlds55r1',
      database: 'eu1z7sd3vgt4unee'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();