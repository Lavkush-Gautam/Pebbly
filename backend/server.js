import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './db/db.js';
import userRouter from './routes/User.routes.js';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const _dirname = path.resolve();

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/user', userRouter);

// Serve frontend (if using Vite or React build)
app.use(express.static(path.join(_dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(_dirname, 'frontend', 'dist', 'index.html'));
});

// Optional test route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  connectDB();
});
