import { getCustomRepository } from "typeorm";
import ComplimentsRepository from "../repositories/ComplimentsRepositories";

export default class ListUserSenderComplimentService { 

  async execute (user_id: string) { 
    const complimentsRepositories = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepositories.find({
      where: { 
        user_sender: user_id
      },
      relations: [
        "userSender",
        "userReceiver",
        "tag"
      ]
     })

     return compliments;
  }

}