
const dotenv = require("dotenv").config();
//Requires
import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
import textRouter from "./routes/text.router";
import userRouter from "./routes/user.router"
import userStoryRouter from "./routes/userStory.router"
import morgan from "morgan";
// Instances
const app = express();

const TEXTS_ROUTER = "/api/texts"
const USERS_ROUTER = "/api/users"
const USER_STORIES_ROUTER = "/api/userstories"
// Middlewares
app.use(json());
app.use(urlencoded());
app.use(morgan("dev")); //Logging

// require("./resources/UserStory/userStory.router")(app);
// Routes
app.use(TEXTS_ROUTER,textRouter)
app.use(USERS_ROUTER,userRouter)
app.use(USER_STORIES_ROUTER,userStoryRouter)
app.use('/ping', (req,res,next)=>{
  res.status(200).json({message:'Pong'})
})
// Connect to the database
connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT || 4002);
    console.log(`Fiat Service - listening on port ${process.env.PORT}`);
  })
  .catch((err) => console.log(err));

// // Transform from speech to text
// app.get("/", (req, res) => {
//   return res.status(200).send({
//     success: true,
//   });
// });
