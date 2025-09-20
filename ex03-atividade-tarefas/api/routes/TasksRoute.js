import Router from "express";
import { getAllTasks } from "../controllers/TaskController.js";

const router = Router();

router.get("/tasks", getAllTasks);

export default router;