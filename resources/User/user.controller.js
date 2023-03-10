// Important requires
const UserModel = require("./user.model");

// Function to update Profile details
const updateProfile = (req, res) => {

    const userId = req.body.userid;
    const userDetails = req.body;
    console.log(userId)

    // Find the user by their ID and update their details
    UserModel.findByIdAndUpdate(userId, userDetails, { new: true })
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

module.exports = { updateProfile };
