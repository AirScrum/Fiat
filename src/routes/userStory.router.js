
import { Router } from "express";
import userStoriesControllers from "../controllers/userStory.controller";
const router = Router();
/**
 * Update userStory by userStoryID
 * Delete userStory by userStoryID
 */
router.route("/:id")
.put(userStoriesControllers.updateOne)
.delete(userStoriesControllers.removeOne)
/**
 * Get userStories by meetingID && userID
 */
router.route("/history")
.post(userStoriesControllers.getHistory);

export default router;
