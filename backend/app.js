import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/feedback.routes.js';
import { DB_NAME } from "./constants.js";
//import router from './routes/feedback.routes';

// dotenv.config({
//   path:'../env'
// })

dotenv.config(); // this will look for .env by default


const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json());
app.use('/feedback', router);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('DB connection error:', err);
  }
};

startServer();

