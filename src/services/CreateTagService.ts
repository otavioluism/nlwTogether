import { getCustomRepository } from 'typeorm';
import TagsRepositories from '../repositories/TagsRepositories';

interface IRequestTag { 
  name: string;
}

class CreateTagService { 

  async execute( { name }: IRequestTag ) { 
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) { 
        throw new Error('This Tag havent name!');
    }

    const tagAlreadyExists = await tagsRepositories.findOne({ name }); 

    if (tagAlreadyExists) { 
        throw new Error('This tag already exists!');
    }
    
    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);

    return tag;
  }

}

export default CreateTagService;