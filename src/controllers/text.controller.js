import { Text } from "../models/text.model"
import { crudControllers } from "../utils/CRUD";

export const getTextsByUserID = async (req, res, next) => {
  console.log('hello')
  try {
    const userId = "63fe5bbb8e02db9f6a63e838";
    const meetings = await Text.find({ userID: userId }).select("_id");
    if (!meetings) {
      return res.status(404).json({ message: "No meetings" });
    }
    return res.status(200).json({ data: meetings });
  } catch (error) {
    console.error(error);
    next(error)
  }
};
const textControllers = (model)=>({
  getTextsByUserID:getTextsByUserID,
  ...crudControllers(model)
})
export default textControllers(Text)