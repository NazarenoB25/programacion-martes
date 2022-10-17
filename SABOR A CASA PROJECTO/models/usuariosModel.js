var pool = requiere('./bd');
var md5 = requiere('md5');

async function getUserAndPassword(user, password) {
  try {
    var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
    var rows = await pool.query(query, [user, md5 (password)]);
    return rows[0];
 }  catch (error){
    console.log(error)
 }
}

module.exports = { getUserAndPassword }