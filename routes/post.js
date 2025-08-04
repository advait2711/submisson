// routes/posts.js
import express from 'express';
import {
  getPosts,
  createPost,
  getUserProfile,
  deletePost
} from '../controllers/postController.js';
import auth1 from '../middleware/middleware.auth.js';

const router = express.Router();

router.get('/', auth1, getPosts);
router.post('/', auth1, createPost);
router.get('/user/:userId', auth1, getUserProfile);
router.get('/delete/:postId', auth1, deletePost);


export default router;
