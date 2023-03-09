const { protected } = require('./user.controller')

module.exports = function (app) {

  // Example of protected routes
  app.get("/protected", protected);
  
};
