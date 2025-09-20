import { Task } from "../models/Task.js";
import { v4 as uuidV4 } from "uuid";

const tasks = [];

const getAllTasks = (req, res) => {
    return res.send(tasks);
};

export { getAllTasks };