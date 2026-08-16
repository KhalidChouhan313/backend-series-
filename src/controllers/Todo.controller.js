import asyncHandler from 'express-async-handler';
import Todo from '../models/Todo.model.js';

export const getTodos = asyncHandler(async (req, res) => {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json({
        success: true,
        count: todos.length,
        data: todos,
    })
});

export const createTodo = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description });
    res.status(201).json({
        success: true,
        data: todo,
    })
})

export const updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { title, description }, { new: true });
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }
    res.status(200).json({
        success: true,
        data: todo,
    })
})

export const deleteTodo = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }
    res.status(200).json({
        success: true,
        data: todo,
    })
})