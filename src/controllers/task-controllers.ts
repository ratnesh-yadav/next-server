import { Request, Response } from 'express';
import { Task } from '../models/task-model';

//We can also add JWT token auth to the following apis 
//for restricting unauthorized requests.

//We can also apply signin and sign up flow.

//Api to create task
export const createTask = async (req: Request, res: Response) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json({ status: "201", success: true, data: task});
  } catch (err) {
    res.status(500).json({ status : "500", success: false, message: err });
  }
};

//Api to get tasks along with the filters
export const getTasks = async (req: Request, res: Response) => {
    try{
  const { filter } = req.query;
  let query = {};
  if (filter === 'in-progress') query = { status: "in-progress" };
  if (filter === 'done') query = { status: "done" };
  if (filter === 'under-review') query = { status: "under-review" };

  const tasks = await Task.find(query);
  res.status(201).json({ status: "201", success: true, data: tasks});
    }catch (err) {
  res.status(500).json({ status : "500", success: false, message: err });
    }
};

//Api to update task
export const updateTask = async (req: Request, res: Response) => {
    try{
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(201).json({ status: "201", success: true, data: task});
    } catch (err) {
  res.status(500).json({ status : "500", success: false, message: err });
    }
};

//Api to delete task 
export const deleteTask = async (req: Request, res: Response) => {
    try{
  const task = await Task.findByIdAndDelete(req.params.id);
  res.status(201).json({ status: "201", success: true, data: task});
    } catch (err) {
        res.status(500).json({ status : "500", success: false, message: err });
    }
};
