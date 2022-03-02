let mysql = require('mysql')


let db = mysql.createConnection({
    host:'192.168.64.2',
    user:'test',
    password:'12345',
    database:'tourisme',
});
module.exports = db;
