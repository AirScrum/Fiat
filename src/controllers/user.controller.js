// Important requires
import { User } from "../models/user.model"
import { crudControllers } from "../utils/CRUD";
import createError from "http-errors"
// Function to update Profile details
export const updateProfile = async (req, res, next) => {
    try {
        const userId = req.body.userid;
        const userDetails = req.body.request;
        if (!userId || !userDetails) {
            throw new createError[422]('Error no userId/userDetails not found!')
        }
        // Find the user by their ID and update their details
        const doc = await User.findByIdAndUpdate(userId, userDetails, { new: true })
            .select("-createdAt -updatedAt -__v -password")
        if (!doc) {
            throw new createError[404]("User not found!")
        }
        res.send(doc)
    } catch (error) {
        console.error(error)
        next(error)
    }
};
const userControllers = (model) => ({
    updateProfile: updateProfile,
    ...crudControllers(model)
})
export default userControllers(User)