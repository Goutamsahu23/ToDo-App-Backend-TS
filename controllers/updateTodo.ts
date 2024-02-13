import { Request, Response } from "express";
import Todo from '../models/todo';


export const updateTodo = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;
        const response = await Todo.findByIdAndUpdate(
            { _id: id },
            {
                title: title,
                description: description,
                updatedAt: Date.now()
            },
            { new: true })

        res.status(200).json({
            success: true,
            data: response,
            message: "data updated successfully."
        })

    } catch (err) {
        console.error(err);
        res.status(500).json(
            {
                success: false,
                data: "internal server error.",
                message: err
            }
        )
    }
}

