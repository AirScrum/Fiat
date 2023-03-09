const { getProfile,updateProfile } = require('./user.controller')

module.exports = function (app) {

  // Route to get Profile details
  app.get("/profile", getProfile);

  // Route to update Profile details
  app.post("/profile", updateProfile);
  
};
