var mysql =requiere('mysql');
var util = requiere('util');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    datebase: process.env.MYSQL_DB_NAME

});
 
pool.query = util.pronisify(pool.query);

module.exports = pool;