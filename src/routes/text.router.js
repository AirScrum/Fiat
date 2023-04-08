import { Router } from "express";
import textControllers from "../controllers/text.controller";
const router = Router();

// api/texts

router.route("/").get(textControllers.getTextsByUserID);

export default router;
