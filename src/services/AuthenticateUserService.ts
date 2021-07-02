import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAutheticateRequest { 
  email: string;
  password: string;
}

class AuthenticateUserService { 
  async execute({ email, password }: IAutheticateRequest){ 
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email,
     })

     if (!user) { 
       throw new Error("Email/password incorrect!");
     }

     const passwordMatch = await compare(password, user.password);

     if (!passwordMatch) { 
       throw new Error("Email/password incorrect!");
     }

     const token = sign({ 
       email: user.email,
     }, process.env.KEY_SECRET, {
       subject: user.id,
       expiresIn: "1d",
     });

     return token;
  }

}

export default AuthenticateUserService;