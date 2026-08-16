import { Router } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/Todo.controller.js";

const TodoRouter = Router();

TodoRouter.get("/", getTodos);
TodoRouter.post("/create", createTodo);
TodoRouter.put("/update/:id", updateTodo);
TodoRouter.delete("/delete/:id", deleteTodo);
export default TodoRouter;