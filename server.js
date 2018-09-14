var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8888;

// var urlencodedParser = bodyParser.urlencoded({ extended: true });
// var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost:' + PORT);
});
