const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'harsh',
    password: 'Metablock@123',
    database: 'wingo'
});
   // "start": "pm2 start src/server.js"

export default connection;