var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../../../../')));
module.exports = app;
var server = app.listen(8082, function() {
    console.log('express server listening on port ' + server.address().port);
});
