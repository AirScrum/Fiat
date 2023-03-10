const { updateProfile } = require('./user.controller')

module.exports = function (app) {

  // Route to update Profile details
  app.post("/profile", updateProfile);
  
};
