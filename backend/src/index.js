import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js';
import { connectDB } from './lib/db.js';

const app = express();
const PORT = process.env.PORT;

app.use('/api/auth', authRoutes);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
