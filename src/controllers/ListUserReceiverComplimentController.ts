import { Request, Response } from 'express';
import ListUserReceiveComplimentService from '../services/ListUserReceiveComplimentService';


export default class ListUserReceiverComplimentController { 

  async handle(request: Request, response: Response) { 
    const { user_id } = request;

    const listUserReceiveComplimentService = new ListUserReceiveComplimentService()

    const compliments = await listUserReceiveComplimentService.execute(user_id);

    return response.json(compliments);
  }

}