var config = require("./data.json");
var mysql = require('mysql-libmysqlclient');
var client = mysql.createConnectionSync(config.host, config.user, config.password, config.database);

var query = "SELECT * FROM Users ;" ;
var handle = client.querySync(query) ;
var results = handle.fetchAllSync() ;

console.log(JSON.stringify(results)) ;
