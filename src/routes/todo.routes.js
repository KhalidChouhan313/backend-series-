import { Router } from "express";
import { createTodo, getTodos } from "../controllers/Todo.controller.js";

const TodoRouter = Router();

TodoRouter.get("/", getTodos); 
TodoRouter.post("/create", createTodo);

export default TodoRouter;