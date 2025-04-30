import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/task-routes';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Define route prefix for task-related endpoints
app.use('/tasks', taskRoutes);

//connect database
mongoose.connect(process.env.MONGO_URI!).then(() => {
   // Start the server only after successful DB connection
  app.listen(process.env.PORT, () => console.log('API running on http://localhost:5000'));
});
