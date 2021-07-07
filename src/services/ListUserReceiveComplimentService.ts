import { getCustomRepository } from "typeorm";
import ComplimentsRepository from "../repositories/ComplimentsRepositories";

export default class ListUserReceiveComplimentService { 

  async execute (user_id: string) { 
    const complimentsRepositories = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepositories.find({
      where: { 
        user_receiver: user_id
      }
     })

     return compliments;
  }

}