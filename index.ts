import express,{Express,Request,Response} from 'express';
import dotenv from 'dotenv'
import dbConnect from './config/db'
import todoRoutes from './routes/todoRoutes'

dotenv.config();



const app:Express=express();
const PORT=process.env.PORT || 3000;

app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
    res.send("Express + TypeScript");
})
app.use('/api/v1',todoRoutes);

dbConnect();

app.listen(PORT,()=>{
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
})