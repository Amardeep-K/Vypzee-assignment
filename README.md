# 🛒 Trackit — Full Stack Shopping Tracker
## Live Url
https://vypzee-assignment.vercel.app/

Trackit is a full-stack shopping list  with user authentication.
Built using React, Node.js, Express, MongoDB Atlas, JWT, and Tailwind CSS.

---

## 📁 Project Structure

.
├── client/
│   ├── .env.sample
│   └── ...
├── server/
│   ├── .env.sample
│   └── ...
└── README.md

---

## ⚙️ Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

git clone <your-repo-url>
cd <your-project-folder>

---

### 2️⃣ Setup Environment Variables

Environment variables are provided as `.env.sample`
inside **both** `client` and `server` directories.

👉 Create `.env` files from the samples:

# Backend
cd server
cp .env.sample .env

# Frontend
cd ../client
cp .env.sample .env

---

### 3️⃣ Configure MongoDB Atlas (Backend)

1. Create a cluster on MongoDB Atlas  
2. Add your IP address to **Network Access**
3. Create a database user
4. Copy the connection string

Example (do NOT use directly):

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>

Paste this value into:

server/.env

---

### 4️⃣ Install Dependencies

# Backend
cd server
npm install

# Frontend
cd ../client
npm install

---

### 5️⃣ Run the Application

# Start backend server
cd server
npm run dev

# Start frontend client (open a new terminal)
cd ../client
npm run dev

---

## 🌐 Access the App

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

---

## 🔐 Authentication

- JWT-based authentication
- Tokens stored in HTTP-only cookies
- Auth handled using React Context
- Protected backend routes via middleware

---

## 🧪 Features

- User registration & login
- Add shopping items
- Mark items as completed
- Auth-based dynamic UI
- Responsive UI with Tailwind CSS

---

## 🛠 Tech Stack

Frontend:
- React
- Vite
- Tailwind CSS
- Axios

Backend:
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- Cookie-based authentication

---


## 📄 License

MIT License

---

## 👨‍💻 Author

Built with ❤️ by Amar
