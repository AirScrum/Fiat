// Important requires
import { UserStories } from "../models/userStory.model";
import { crudControllers } from "../utils/CRUD";
import createError from "http-errors";
export const getHistory = async (req, res, next) => {
    console.log("hello world");
    try {
        const userID = req.body.userID;
        const textID = req.body.textID;
        if (!userID || !textID) {
            throw new createError[422]("Error no userID/textID not found!");
        }
        // Find the user story
        const userStories = await UserStories.find({
            userID: userID,
            textID: textID
        });
        if (!userStories) {
            return res.status(404).json({ message: "No user stories" });
        }
        return res.status(200).json({ data: userStories });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
const userStoriesControllers = (model) => ({
    ...crudControllers(model),
    getHistory: getHistory
});
export default userStoriesControllers(UserStories);
