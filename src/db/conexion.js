var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'quejas_tulio',
    user : 'root',
    password : 'Jonathansor200066',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

async function  realizarConsulta(query) {
    return new Promise((resolve, reject) => {
        conexion.query(query, function (error, results, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    conexion: conexion,
    realizarConsulta: realizarConsulta
};