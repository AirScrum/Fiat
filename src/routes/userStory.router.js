
import { Router } from "express";
import { getHistory } from "../controllers/userStory.controller";
const router = Router();

router.route("/history").get(getHistory);

export default router;
