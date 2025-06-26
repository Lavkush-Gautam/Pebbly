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

// This provides the current working directory.
// Using import.meta.url and fileURLToPath is a modern way to get __dirname in ES Modules.
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // This is C:\Users\e\Desktop\PebblyConnect\backend

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/user', userRouter);

// Determine the path to the root of your project (PebblyConnect)
// This goes up one directory from 'backend'
const projectRoot = path.resolve(__dirname, '..'); // This would be C:\Users\e\Desktop\PebblyConnect\

// Serve frontend build files
// Now we join projectRoot with 'frontend/dist'
app.use(express.static(path.join(projectRoot, 'frontend', 'dist')));

// Catch-all route to serve the frontend's index.html
// Again, resolve from projectRoot
app.get('/{*path}', (req, res) => {
  res.sendFile(path.resolve(projectRoot, 'frontend', 'dist', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
  connectDB();
});
