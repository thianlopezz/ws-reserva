var connection = require('../connection');

function chocolatada() {

    this.setPregunta = function (idpregunta, res) {
        connection.acquire(function (err, con) {
            con.query("call recibe_respuesta('" + idpregunta + "' )", function (err, result) {
                con.release();

                if (err){
                    console.log(err);
                    res.send({ success: false, mensaje: 'Lo siento algo salió mal!' });
                } else {
                    if (result[0][0].success === 1){
                        res.send({ success: true, mensaje: result[0][0].mensaje });
                    } else {
                        res.send({ success: false, mensaje: result[0][0].mensaje });
                    }
                }                    
            });
        });
    };

}

module.exports = new chocolatada();