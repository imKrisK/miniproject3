import express from "express";
import myUserController from "../controllers/myUserController";

const router = express.Router();

// /api/my/users
router.post("/", myUserController.createCurrentUser );

export default router;

