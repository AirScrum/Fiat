// Important requires
const UserStoryModel = require("./userStory.model");
const mongoose = require('mongoose')

// Function to update Profile details
const getHistory = (req, res) => {
    /*const userId = req.body.userid;
    if (!userId) {
        return res.send({
            message: "User Id not found",
        });
    }*/
    userId = "63f772f72db76b133592617c"
     // Find the user story
     UserStoryModel.find({userID: userId})
     .then((userStories) => {

        return res.status(200).send({
            data: userStories,
        });
     })
     .catch((err) => {
         // Handle error
         console.error(err);
         res.status(500).send("Error updating user details");
     });

    
};

module.exports = { getHistory };
