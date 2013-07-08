/**
 * db.js
 */
// var settings = require('../settings');
// var Db = require('mongodb').Db;
// var Connection = require('mongodb').Connection;
// var Server = require('mongodb').Server;
var settings = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT,{}));










//module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}));