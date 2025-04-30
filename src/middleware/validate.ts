import { Request, Response, NextFunction } from 'express';
// Import ZodSchema type from zod for type safety
import { ZodSchema } from 'zod';

// Middleware to validate request body against a Zod schema
export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
  // If validation fails, respond with a 400 status and formatted error details
    if (!result.success) {
      res.status(400).json({
        message: 'Validation error',
        errors: result.error.format(),
      });
      return; // Exit early on validation error
    }

    req.body = result.data;
    next();
  };

