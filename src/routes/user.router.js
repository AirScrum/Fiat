
import { Router } from "express";
import { updateProfile } from "../controllers/user.controller";
const router = Router();

// api/users/profile

router.route("/profile").post(updateProfile);

export default router;
