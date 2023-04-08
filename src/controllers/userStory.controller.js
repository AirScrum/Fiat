// Important requires
import { UserStories } from "../models/userStory.model";

// Function to get Profile details
export const getHistory = async (req, res) => {
  try {
    /*const userId = req.body.userid;
       if (!userId) {
           return res.send({
               message: "User Id not found",
           });
       }*/
    const userId = "63fe5bbb8e02db9f6a63e838";
    const textID = "64067dfc46d9b5ffe06304ab";
    // Find the user story
    const userStories = await UserStories.find({
      userID: userId,
      textID: textID,
    });
    if (!userStories) {
      return res.status(404).json({ message: "No user stories" });
    }
    return res.status(200).json({ data: userStories });
  } catch (error) {
    console.error(error);
    res.status(400).send("Error receiving user stories `history details");
  }
};