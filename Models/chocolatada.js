var connection = require('../connection');

function chocolatada() {

    this.setPregunta = function (idpregunta, res) {
        connection.acquire(function (err, con) {
            con.query("call recibe_respuesta('" + idpregunta + "' )", function (err, result) {
                con.release();

                if (err) {
                    console.log(err);
                    res.send({ success: false, mensaje: 'Lo siento algo salió mal!' });
                } else {
                    if (result[0][0].success === 1) {
                        res.send({ success: true, mensaje: result[0][0].mensaje });
                    } else {
                        res.send({ success: false, mensaje: result[0][0].mensaje });
                    }
                }
            });
        });
    };

    this.activaPregunta = function (idpregunta, res) {
        connection.acquire(function (err, con) {
            con.query("call activa_pregunta('" + idpregunta + "' )", function (err, result) {
                con.release();

                if (err) {
                    console.log(err);
                    res.send({ success: false, mensaje: 'Lo siento algo salió mal!', error: err });
                } else {

                    res.send(result[0][0]);
                }
            });
        });
    };

    this.getPregunta = function (idpregunta, res) {
        connection.acquire(function (err, con) {
            con.query("call getPregunta()", function (err, result) {
                con.release();

                if (err) {
                    console.log(err);
                    res.send({ success: false, mensaje: 'Lo siento algo salió mal!', error: err });
                } else {

                    if (!result[0][0].mensaje) {

                        result[0][0].respuestas = result[1];
                        res.send({ success: true, data: result[0][0] });
                    } else {
                        res.send({ success: false, mensaje: result[0][0].mensaje });
                    }
                }
            });
        });
    };

}

module.exports = new chocolatada();