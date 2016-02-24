var envs = require('dotenv').config();;
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var PORT = process.env.NODE_ENV || 3000;
//heroku config will make the jawsdb url for you

var app = express();

//serve static content (burger.png)for the app from the "public" directory in the app directory
app.use('/static', express.static('public'));

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', expbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var orm = require('./config/orm.js')

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);

    return;
  }
});

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

// post route
app.post('/', function(req, res) {
  //mysql commands
  orm.selectAll('burger_table;', function(err, res) {
    var data = {burger_data: res}
  })
     res.render("index", data);   
})

var PORT = 3000;
app.listen(PORT, function() {
  console.log("Listening on port %s" + PORT);
});