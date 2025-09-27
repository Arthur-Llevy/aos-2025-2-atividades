import Router from "express";
import { getAllTasks, createTask, getTaskById, deleteTask, updateTask } from "../controllers/TaskController.js";

const router = Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", createTask);
router.get("/tasks/:id", getTaskById);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);

export default router;