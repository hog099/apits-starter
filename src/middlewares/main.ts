import { Request, Response, NextFunction } from 'express';

export const main = async (req: Request, res: Response, next: NextFunction) => {
  next();
}
