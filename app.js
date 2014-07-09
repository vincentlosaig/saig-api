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
  app.locals.clientLink = 'http://localhost:3000';
  app.locals.apiLink = 'http://localhost:4000';
}

// production only
if (env === 'production') {
  app.locals.clientLink = 'http://localhost:3000';
  app.locals.apiLink = 'http://localhost:4000';
}

// JSON API
app.get('/api/questions', api.questions);
app.get('/api/question/:id', api.question);
app.post('/api/question', api.addQuestion);
app.put('/api/question/:id', api.editQuestion);
app.delete('/api/question/:id', api.deleteQuestion);

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