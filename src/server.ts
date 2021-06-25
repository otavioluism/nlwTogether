import dotenv from 'dotenv';
import path from 'path';
import 'reflect-metadata'; //trabalhar com decorators do typescript
import './database'; //inserido a conexão do BD
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'; // trabalhar com erros asincronos

import router from './routes';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
const app = express();

app.use(express.json()); // Habilita requisição do tipo body com JSON

app.use(router);

// midleware para erro
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

  // erro do codigo
  if (err instanceof Error) { 
    return response.status(400).json({
      error: err.message
    })
  } 

  // erro do servidor
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })

});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running in port ${process.env.APP_PORT}`)
});