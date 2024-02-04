const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'Harsh',
    password: 'Harsh@123',
    database: 'daman_single'
});
   // "start": "pm2 start src/server.js"

export default connection;