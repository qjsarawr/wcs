//QUIAMBAO, JUNE SARAH P.
var http = require('http');
var myRoutes = require('./routes.js');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(myRoutes.root('June Sarah'));
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(myRoutes.about('June Sarah'));
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(myRoutes.contact('June Sarah'));
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(myRoutes.gallery('June Sarah'));
    res.end();
  } else res.end('Invalid Request');
});
server.listen(3000);
