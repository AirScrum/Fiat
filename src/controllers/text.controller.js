import { Text } from "../models/text.model";
import { crudControllers } from "../utils/CRUD";
import createError from "http-errors";

export const getTextsByUserID = async (req, res, next) => {
    try {
        const userID = req.body.userID;
        if (!userID) {
            throw new createError[422]("Error no userID not found!");
        }
        const meetings = await Text.find({ userID: userID }, { textContent: 0 });
        if (!meetings) {
            return res.status(404).json({ message: `No meetings found for user id ${userID}` });
        }
        return res.status(200).json({ meetings: meetings });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
const textControllers = (model) => ({
    getTextsByUserID: getTextsByUserID,
    ...crudControllers(model)
});
export default textControllers(Text);
