var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler'),
  morgan = require('morgan'),
  http = require('http'),
  path = require('path'),
  api = require('./routes/api'),
  fs = require('fs');
  
var app = module.exports = express();

app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());    
app.use(express.static(path.join(__dirname, 'public')));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler());
}

// production only
if (env === 'production') {
}

// JSON API
app.get('/json/schemas.json', function(req, res){
	res.render('schemas', { data : JSON.stringify(api.schemas()) });
});

// redirect all others to the index (HTML5 history)
app.get('*', function(req,res){
    res.redirect(app.locals.clientLink);
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});