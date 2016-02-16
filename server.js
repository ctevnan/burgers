var express = require('express');
var method-override = require('method-override');
var bodyParser = require('bodyParser');

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

//home get route
  app.get('/', function(req,res) {
      //mySQL commands
      connection.query('SELECT * FROM burger_table;', function(err, data) {
        if (err) throw err;
          console.log('The solution is: ', data);
          //res.send(col[0]);
          res.render('index', {viewData: data});
        });
  });
})

var port = 3000;
app.listen(port, function() {
  console.log("Listening on PORT" + port);
});