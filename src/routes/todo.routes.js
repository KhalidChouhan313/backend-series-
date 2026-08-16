import { Router } from "express";
import { getTodos } from "../controllers/Todo.controller.js";

const TodoRouter = Router();

TodoRouter.get("/", getTodos); 

export default TodoRouter;