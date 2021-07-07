import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload { 
  sub: string;
}

function ensureAuthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction) {

    const authToken = request.headers.authorization;

    if(!authToken) { 
      return response.status(401).end();
    }

    const [, Token] = authToken.split(" ");

    try {

      const { sub } = verify(Token ,process.env.KEY_SECRET) as IPayload;

      request.user_id = sub;
  
      return next();

    } catch (err) { 

      return response.status(401).end();

    }

}


export default ensureAuthenticated;