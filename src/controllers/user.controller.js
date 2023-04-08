// Important requires
import {User} from "../models/user.model"
// Function to update Profile details
export const updateProfile = (req, res) => {

    const userId = req.body.userid;
    const userDetails = req.body.request;

    // Find the user by their ID and update their details
    User.findByIdAndUpdate(userId, userDetails, { new: true })
        .select("-createdAt -updatedAt -__v -password")
        .then((user) => {

            if (user) {
                // If user is found and updated, send the updated details back in response
                res.send(user);
            } else {
                // If user is not found, send a 404 response
                res.status(404).send("User not found");
            }
        })
        .catch((err) => {
            // Handle error
            console.error(err);
            res.status(500).send("Error updating user details");
        });
};

