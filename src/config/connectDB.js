const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    // host: "185.199.53.72",
    // user: 'root',
    // password: 'Metablock@123',
    // database: 'wingo'
    host: "localhost",
    user: 'Jayesh',
    password: 'Jayesh@123',
    database: 'wingo'
});
   // "start": "pm2 start src/server.js"

export default connection;