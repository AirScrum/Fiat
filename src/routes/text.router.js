import { Router } from "express";
import { getTextsByUserID } from "../controllers/text.controller";
const router = Router();

// api/texts

router.route("/").get(getTextsByUserID);

export default router;
