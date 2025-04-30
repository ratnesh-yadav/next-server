// Import Zod library for schema validation
import { z } from 'zod';

// Schema for validating task creation requests
export const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.string().optional()
});

// Schema for validating task update requests
export const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  status: z.string().optional()
});
