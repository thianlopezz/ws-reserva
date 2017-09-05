var connection = require('../connection');

function libro() {	

  this.getLibros = function(valor, criterio, res) {
    connection.acquire(function(err, con) {
      con.query('call getLibros(\''+ valor +'\', \''+ criterio +'\')', function(err, result) {
        con.release();
		
		if(err)
			res.send({ success: false, mensaje: new String(err)});
		else
			res.send({success: true, libros: result[0]});
      });
    });
  };

}

module.exports = new libro();