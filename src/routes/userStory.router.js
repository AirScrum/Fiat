import { Router } from "express";
import userStoriesControllers from "../controllers/userStory.controller";
const router = Router();
/**
 * Create userStory
 */
router.route("/").post(userStoriesControllers.createOne);
/**
 * Get userStories by meetingID && userID
 */
router.route("/meeting").post(userStoriesControllers.getHistory);
/**
 * Update userStory by userStoryID
 * Delete userStory by userStoryID
 */
router
    .route("/:id")
    .put(userStoriesControllers.updateOne)
    .delete(userStoriesControllers.removeOne)
    .get(userStoriesControllers.getOne);

export default router;
