//server.js

import express from 'express';
import cors from "cors";
import expressLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/post.js';
import path from 'path';
import { fileURLToPath } from 'url';



import dotenv from "dotenv";
dotenv.config();


// Connect to Database
connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// EJS
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
// app.use(expressLayouts);
// app.set('layout', 'layout');

// Express body parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// Root route
app.get('/', (req, res) => res.redirect('/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
