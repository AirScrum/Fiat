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
 */
router.route("/:id").delete(textControllers.removeOne)
export default router;
