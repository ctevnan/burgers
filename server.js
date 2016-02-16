var express = require('express');
var bodyParser = require('bodyParser'):

var app = express();
//serve static content for the app from the "public" directory in the app directory
app.use(express.static(_dirname + '/public'));

var expbs = require('express-handlebars');
app.engine('handlebars', expbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burger_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);

    return;
  }
};

console.log('connected as id' + connection.threadId);

var port = 3000;
app.listen(port, function() {
  console.log("Listening on PORT" + port);
});