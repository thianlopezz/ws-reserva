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

  this.getMisLibros = function(usuario, res) {
    connection.acquire(function(err, con) {
      con.query('call getMisLibros(\''+ usuario +'\')', function(err, result) {
        con.release();
		
		if(err)
			res.send({ success: false, mensaje: new String(err)});
		else
			res.send({success: true, libros: result[0]});
      });
    });
  };

  this.setPrestamo = function(libro, usuario, res) {
    connection.acquire(function(err, con) {
      con.query('call setPrestamo(\''+ libro +'\', \''+ usuario +'\')', function(err, result) {
        con.release();
		
		if(err)
			res.send({ success: false, mensaje: new String(err)});
		else
			res.send({success: true});
      });
    });
  };

  this.setEstado = function(libro, usuario, estado, res) {
    connection.acquire(function(err, con) {
      con.query('call setEstado(\''+ libro +'\', \''+ usuario +'\', \''+ estado +'\')', function(err, result) {
        con.release();
		
		if(err)
			res.send({ success: false, mensaje: new String(err)});
		else
			res.send({success: true});
      });
    });
  };

}

module.exports = new libro();