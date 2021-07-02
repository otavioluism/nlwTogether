import { Request, Response, NextFunction } from 'express';

 export default function ensureAdmin(request: Request, response: Response, next: NextFunction) { 
  //verificar se usuario admin
  const admin = true;

  if (admin) { 
    return next();
  }

  return response.status(401).json({
    msg: "Unauthotized!"
  });

 }