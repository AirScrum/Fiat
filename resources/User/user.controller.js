// Important requires
const UserModel = require("./user.model");


// Function to simulate protected routes
const protected = (req, res) => {
    return res.status(200).send({
        success: false,
    });
};

module.exports = { protected };
