import { Request, Response } from 'express';
import { Task } from '../models/task';

export const createTask = async (req: Request, res: Response) => {
  const { title, description, category, userId } = req.body;
  try {
    const task = await Task.create({ title, description, category, userId });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  const { userId } = req.query;
  try {
    const tasks = await Task.findAll({ where: { userId } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};
