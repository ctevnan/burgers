//var envs = require('dotenv').config();;
var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var PORT = process.env.NODE_ENV || 8080;
//heroku config will make the jawsdb url for you

//serve static content (burger.png)for the app from the "public" directory 
//in the app directory
app.use('/static', express.static('/public'));
//app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/create', routes);
app.use('/update', routes);
app.use('/delete', routes);

//var orm = require('./config/orm.js')

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});