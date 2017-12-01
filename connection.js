var mysql = require('mysql');

function Connection() {
  this.pool = null;
// JAWS COHORS
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 5,
      host: 'iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port:3306,
      user: 's7jhnvw1ypb8udws',
      password: 'i453rtdb4gj8x50v',
      database: 'u6zkl08qttwwdi8r'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
    });
  };
}

module.exports = new Connection();