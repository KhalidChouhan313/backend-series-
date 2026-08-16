import { Router } from "express";
import { createTodo, getTodos, updateTodo } from "../controllers/Todo.controller.js";

const TodoRouter = Router();

TodoRouter.get("/", getTodos);
TodoRouter.post("/create", createTodo);
TodoRouter.put("/update/:id", updateTodo);

export default TodoRouter;