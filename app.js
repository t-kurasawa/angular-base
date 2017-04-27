var express = require('express');
var path = require('path');
var app = express();

app.use('/',express.static(path.join(__dirname,'public')));
app.use('/angular',express.static(path.join(__dirname,'node_modules','angular')));
app.listen(3000);
