
import { Router } from "express";
import userStoriesControllers from "../controllers/userStory.controller";
const router = Router();
router.route("/").get(userStoriesControllers.getAll)
router.route("/history").post(userStoriesControllers.getHistory);

export default router;
