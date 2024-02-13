import { Request,Response } from "express";
import Todo from '../models/todo'



export const createTodo = async (req:Request, res:Response)=>{
    
    try{
        const {title,description} = req.body;

        const response=await Todo.create({title,description})
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"data stored sucessfully"
            }
        )
    }catch(err){
        console.error(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error.",
                message:err
            }
        )
    }
}