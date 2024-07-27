var routes = {
  root: function (name) {
    return 'Welcome ' + name + ' This is an activity about basics of Node.js';
  },
  about: function (name) {
    return (
      'Hello ' +
      name +
      '. This activity will teach on how to deal with a simple server and local modules in Node.js'
    );
  },
  contact: function (name) {
    return name + ', if you want additional details...';
  },
  gallery: function (name) {
    return 'Build your gallery here, ' + name;
  },
};
module.exports = routes;
