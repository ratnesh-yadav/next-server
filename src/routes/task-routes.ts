import express from 'express';
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../controllers/task-controllers';
import { validate } from '../middleware/validate';
import { createTaskSchema, updateTaskSchema } from '../validations/task-validation';

const router = express.Router();

router.post('/createTask', validate(createTaskSchema), createTask);
router.get('/getTask', getTasks);
router.patch('/:id', validate(updateTaskSchema), updateTask);
router.delete('/:id', deleteTask);

export default router;
