import dotenv from 'dotenv';
import path from 'path';
import 'reflect-metadata';

import './database';
import express from 'express';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
const app = express();

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running in port ${process.env.APP_PORT}`)
});