import { Router } from "express";
import userStoriesControllers from "../controllers/userStory.controller";
const router = Router();
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
    .get(userStoriesControllers.getOne)
    .post(userStoriesControllers.createOne);

export default router;
