import { Request, Response } from 'express';
import { Task } from '../models/task-model';

export const createTask = async (req: Request, res: Response) => {
  try { console.log(req.body,"---5---")
    const task = new Task(req.body);
    await task.save();
    res.status(201).json({ status: "201", success: true, data: task});
  } catch (err) {
    res.status(500).json({ status : "500", success: false, message: err });
  }
};

export const getTasks = async (req: Request, res: Response) => {
    try{
  const { filter } = req.query;
  let query = {};
  if (filter === 'completed') query = { completed: "completed" };
  if (filter === 'pending') query = { completed: "pending" };

  const tasks = await Task.find(query);
  res.status(201).json({ status: "201", success: true, data: tasks});
    }catch (err) {
  res.status(500).json({ status : "500", success: false, message: err });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try{
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(201).json({ status: "201", success: true, data: task});
    } catch (err) {
  res.status(500).json({ status : "500", success: false, message: err });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try{
  const task = await Task.findByIdAndDelete(req.params.id);
  res.status(201).json({ status: "201", success: true, data: task});
    } catch (err) {
        res.status(500).json({ status : "500", success: false, message: err });
    }
};
