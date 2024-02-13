import { Request,Response } from "express";
import Todo from '../models/todo';


export const deleteTodo =async(req:Request,res:Response)=>{
    try{
        const id=req.params.id;

        const response=await Todo.findByIdAndDelete(id);

        res.status(200)
        .json({
            success:true,
            message:"data deleted successfully."
        })

    }catch(err){
        res.status(400)
        .json({
            success:false,
            message:"error"
        })
    }
}

