import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

// 📒 ValidateRequest middleware return a controller function by using `return next()`
const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // await schema.parseAsync(req) //don't know why not using this
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
