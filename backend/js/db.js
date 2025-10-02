const mysql = require('mysql2/promise');

async function conectar() {
    const conexao = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
    });
    return conexao;
}


async function desconectar(connection) {
    connection.end();
}

module.exports = { conectar, desconectar };