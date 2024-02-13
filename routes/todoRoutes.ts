import express,{Request,Response} from 'express';
const router=express.Router();
import {createTodo} from '../controllers/createTodo';
import {getTodo} from '../controllers/getTodo';
import {updateTodo} from '../controllers/updateTodo';
import {deleteTodo} from '../controllers/deleteTodo';


router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


export default router;