var connection = require('../connection');

function usuario() {

  this.logIn = function(user, password, res, callback) {
    
    connection.acquire(function(err, con) {
      con.query('call seg_login(\''+ user +'\', \''+ password +'\')', function(err, result) {        
        try{

          con.release();
          if(err){
            
            console.log('Error>> usuario.logIn>>' + err);            
            return callback({success: false, mensaje: '' + err});
          }

          if(result[0][0].err == undefined)
              return callback({success: true, usuario: result[0][0]});
          else
              return callback({success: false, mensaje: result[0][0].mensaje});
        }
        catch(ex){

          console.log('Error>> ex>> usuario.logIn>>' + ex);
          return {success:false, mensaje: ex};
        }

      });
    });
  };

  this.getUsuarios = function(criterio, res) {
    connection.acquire(function(err, con) {
      con.query('call Proc_usuario(\''+criterio+'\')', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.mantenimientoUsuario = function(criterio, res) {
    connection.acquire(function(err, con) {
      con.query('call Proc_usuario(\''+criterio+'\')', function(err, result) {

        con.release();
        if(result[0][0].CodErr=='0000')
            res.send({success:true});
        else
            res.send({success:false, data: result[0][0].Mensaje});

      });
    });
  };

  this.cambioContra = function(criterio, res) {
    connection.acquire(function(err, con) {
      con.query('call Proc_usuario(\''+criterio+'\')', function(err, result) {
        
        con.release();
        if(result[0][0].CodErr=='0000')
            res.send({success:true});
        else
            res.send({success:false, data: result[0][0].Mensaje});

      });
    });
  };

}

module.exports = new usuario();