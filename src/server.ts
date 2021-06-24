import dotenv from 'dotenv';
import path from 'path';
import 'reflect-metadata'; //trabalhar com decorators do typescript
import './database'; //inserido a conexão do BD
import express from 'express';

import router from './routes';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
const app = express();

app.use(express.json()); // Habilita requisição do tipo body com JSON

app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running in port ${process.env.APP_PORT}`)
});