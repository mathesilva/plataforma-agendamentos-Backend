import { connectDB } from './config/database';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/database";
import authRoutes from './routes/auth.routes';
import {Router} from 'express';



connectDB();
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/auth', authRoutes)

//app.get('/', (req, res) => {
  //  res.status(200).json('Estou te escutando!');
//});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
