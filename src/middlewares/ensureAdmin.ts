import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';

 export default async function ensureAdmin(request: Request, response: Response, next: NextFunction) { 
  //verificar se usuario admin
  const { user_id } = request;

  const usersRepositories = getCustomRepository(UsersRepositories);

  const user = await usersRepositories.findOne(user_id);

  if (user.admin) { 
    return next();
  }

  return response.status(401).json({
    msg: "Unauthotized!"
  });

 }