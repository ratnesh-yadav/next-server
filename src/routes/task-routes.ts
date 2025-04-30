import express from 'express';
// Import task controller functions to handle route logic
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from '../controllers/task-controllers';
import { validate } from '../middleware/validate';
import { createTaskSchema, updateTaskSchema } from '../validations/task-validation';

const router = express.Router();

// Route to create a new task
// Applies validation middleware before calling the controller
router.post('/createTask', validate(createTaskSchema), createTask);
// Route to retrieve tasks, with optional query filters (e.g., by status)
router.get('/getTask', getTasks);
// Route to update an existing task by ID
// Applies validation middleware for partial updates
router.patch('/:id', validate(updateTaskSchema), updateTask);
// Route to delete a task by ID
router.delete('/:id', deleteTask);

export default router;
