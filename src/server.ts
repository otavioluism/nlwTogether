import dotenv from 'dotenv';
import path from 'path';
import express from 'express';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });
const app = express();

app.get('/teste', async (request, response) => {

  return response.status(200).json({msg: "Olá NLW"});
});


app.post('/post', async (request, response) => {

  return response.status(200).json({msg: "Heelo Worl"})
})



app.listen(process.env.APP_PORT, () => {
  console.log(`Server running in port ${process.env.APP_PORT}`)
});