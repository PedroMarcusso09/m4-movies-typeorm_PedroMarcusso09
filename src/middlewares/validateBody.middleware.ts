import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export const validateBody =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validated = schema.parse(req.body);
    res.locals = { ...res.locals, validated };

    return next();
  };