//QUIAMBAO, JUNE SARAH P.
var http = require('http');
var myRoutes = require('./routes.js');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>Welcome to my Node.js Application</h1><br></body></html>' +
        myRoutes.root('June Sarah')
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is the about page.</h1><br></body></html>' +
        myRoutes.about('June Sarah')
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is the Contact Page.</h1><br></body></html>' +
        myRoutes.contact('June Sarah')
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is the Gallery Page.</h1><br></body></html>' +
        myRoutes.gallery('June Sarah')
    );
    res.end();
  } else res.end('Invalid Request');
});
server.listen(3000);
