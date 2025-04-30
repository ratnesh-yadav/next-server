import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/task-routes';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI!).then(() => {
  app.listen(process.env.PORT, () => console.log('API running on http://localhost:5000'));
});
