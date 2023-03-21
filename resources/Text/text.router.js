const { getTextsByID } = require("./text.controller");

module.exports = function (app) {
  // Route to get meetings by ID
  app.get("/meetings", getTextsByID);
};
