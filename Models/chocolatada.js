var connection = require('../connection');

function chocolatada() {

    this.setPregunta = function (idpregunta, criterio, res) {
        connection.acquire(function (err, con) {
            con.query('call recibe_respuesta(\'' + idpregunta + '\', \'' + criterio + '\')', function (err, result) {
                con.release();

                if (err){
                    res.send({ success: false, mensaje: 'Lo siento algo salió mal!' });
                }                    
                else
                    res.send(result[0][0]);
            });
        });
    };

}

module.exports = new chocolatada();