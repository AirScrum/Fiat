import { Router } from "express";
import textControllers from "../controllers/text.controller";
const router = Router();

// api/texts
/**
 * Get meetings by userID
 */
router.route("/").post(textControllers.getTextsByUserID);
/**
 * Delete meeting by ID
 * Get meeting metadata by ID
 */
router.route("/:id").delete(textControllers.removeOne).post(textControllers.getTextByMeetingID);

/**
 * Create a meeting by userID
 * (For testing purposes)
 */
router.route("/meeting").post(textControllers.createOne);
export default router;
