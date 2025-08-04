// controllers/postController.js
import Post from '../model/posts.model.js';
import User from '../model/user.model.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.render('feed', { posts, user: req.user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const createPost = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            user: req.user.id,
        });

        const post = await newPost.save();
        res.redirect('/posts');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const getUserProfile = async (req, res) => {
    try {
        const profile = await User.findById(req.params.userId);
        if (!profile) {
            return res.status(404).send('Profile not found');
        }
        const posts = await Post.find({ user: req.params.userId }).sort({ date: -1 });
        res.render('profile', { profile, posts, user: req.user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);

        if (!post) {
            return res.status(404).send('Post not found');
        }

        
        if (post.user.toString() !== req.user.id) {
            return res.status(401).send('User not authorized');
        }

        await Post.findByIdAndDelete(req.params.postId);

        
        res.redirect(req.header('Referer') || '/posts');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
