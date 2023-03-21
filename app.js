//Requires
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// Instances
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());

require("./resources/User/user.router")(app);
require("./resources/UserStory/userStory.router")(app);
require("./resources/Text/text.router")(app);
// Connect to the database
mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT || 4002);
    console.log(`Example app listening on port ${process.env.PORT}`);
  })
  .catch((err) => console.log(err));

// Transform from speech to text
app.get("/", (req, res) => {
  return res.status(200).send({
    success: true,
  });
});
