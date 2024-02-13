import { Schema , model,Document} from "mongoose";

export interface ITodo extends Document{
    title:string;
    description:string;
    createdAt:Date,
    updatedAt:Date,
}


const todoSchema = new Schema<ITodo>(
    {
        title:{
            type:String,
            requied:true,
        },
        description:{
            type:String,
            require:true,
        },
        createdAt:{
            type:Date,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            default:Date.now(),
        },


    }
)

export default model<ITodo>('Todo',todoSchema);