
import { Router } from "express";
import userControllers from "../controllers/user.controller";
const router = Router();

// api/users/profile

router.route("/profile").post(userControllers.updateProfile);

export default router;
