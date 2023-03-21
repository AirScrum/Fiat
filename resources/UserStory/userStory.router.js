const { getHistory } = require("./userStory.controller");

module.exports = function (app) {
  // Route to get history
  app.get("/history", getHistory);
};
