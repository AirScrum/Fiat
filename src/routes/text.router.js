import { Router } from "express";
import textControllers from "../controllers/text.controller";
const router = Router();

// api/texts

router.route("/").post(textControllers.getTextsByUserID);

export default router;
