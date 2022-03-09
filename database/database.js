let mysql = require('mysql')


let db = mysql.createConnection({
    host:'192.168.64.2',
    user:'test',
    password:'12345',

    // host:'localhost',
    // user:'root',
    // password:'',

    database:'tourisme',
});
module.exports = db;
