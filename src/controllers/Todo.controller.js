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