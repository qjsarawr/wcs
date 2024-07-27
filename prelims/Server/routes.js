var routes = {
  root: function (name) {
    return (
      '<html><body><h1>Welcome to my Node.js Application</h1><br>' +
      'Welcome ' +
      name +
      ' This is an activity about basics of Node.js </body></html>'
    );
  },
  about: function (name) {
    return (
      '<html><body><h1>This is the about page.</h1><br>' +
      'Hello ' +
      name +
      '. This activity will teach on how to deal with a simple server and local modules in Node.js</body></html>'
    );
  },
  contact: function (name) {
    return (
      '<html><body><h1>This is the Contact Page.</h1><br></body></html>' +
      name +
      ', if you want additional details...'
    );
  },
  gallery: function (name) {
    return (
      '<html><body><h1>This is the Gallery Page.</h1><br></body></html>' +
      'Build your gallery here, ' +
      name
    );
  },
};
module.exports = routes;
