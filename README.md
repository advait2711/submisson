# 🧑‍🤝‍🧑 Community Platform

A full-stack web application built with **Node.js**, **Express**, and **MongoDB**.  
This platform allows users to register, create text-based posts, and view a public feed — creating a simple and effective community hub.

---

## ✨ Features

- 🔐 **User Authentication**: Secure registration and login using **JWT** and **bcrypt.js**
- 📰 **Public Post Feed**: Central homepage with all user posts in reverse chronological order
- ✍️ **Create & Delete Posts**: Authenticated users can create and delete their own posts
- 👤 **User Profiles**: View a user's name, bio, and list of all their posts
- 📱 **Responsive Design**: Clean and mobile-friendly interface with custom CSS

---

## 🛠 Tech Stack

| Layer       | Tech Used                        |
|-------------|----------------------------------|
| Backend     | Node.js, Express.js              |
| Database    | MongoDB, Mongoose                |
| Frontend    | EJS (Embedded JavaScript)        |
| Auth        | JWT, bcrypt.js, cookie-parser    |
| Styling     | Custom CSS (Flexbox)             |
| Deployment  | Render                          |

---

## ⚙️ Installation & Local Setup

### ✅ Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

npm install

# MongoDB connection string
ATLAS=mongodb+srv://<user>:<password>@<cluster-url>/<database-name>

# JWT secret key
JWT_SECRET=your_super_secret_key_here

# Port (optional)
PORT=5000

npm start


Deployed on Vercel:
https://submisson.onrender.com/
