## 🚀 Features

- 🔐 **User Authentication** (Login & Register)
- 💬 **Real-time Messaging** between users
- 🧑‍🤝‍🧑 **User Profile Management**
- 🖼️ **Image Uploads** with Cloudinary
- 🌙 **Responsive Modern UI**
- ⚡ **Fast Rendering** powered by Vite + React
- 🧠 **Context-based State Management**
- ☁️ **Deployed-ready structure** (Frontend & Backend separation)

## 🧩 Project Structure
Chatapp/
├── client/            # React Frontend
│   ├── src/
│   │   ├── pages/     # Login, Home, Profile
│   │   ├── components/# Sidebar, ChatContainer, RightSidebar
│   │   ├── context/   # Auth & Chat Context
│   │   ├── assets/    # Images & Icons
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── server/            # Node.js Backend
    ├── controllers/   # Message & User Controllers
    ├── models/        # Mongoose Models
    ├── routes/        # Express Routes
    ├── middleware/    # Authentication Middleware
    ├── lib/           # Database & Cloudinary Utils
    ├── server.js      # Entry point
    └── package.json

    ## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Context API
- Tailwind CSS (or standard CSS)
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary (for image storage)
- JSON Web Token (JWT) Authentication

**Other Tools:**
- Socket.IO (for real-time communication)
- ESLint (for code quality)
- Vercel / Render deployment ready

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/<your-username>/Realtime_Chatapp.git
cd Realtime_Chatapp

### 2️⃣ Install dependencies
#### For Backend:
cd server
npm install

#### For Frontend:
cd ../client
npm install

### 3️⃣ Set up environment variables
Create \`.env\` files in both **client** and **server** directories as needed:
**For server (.env):**
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name

4️⃣ Run the application

#### Start Backend:
cd server
npm start

#### Start Frontend:
cd client
npm run dev

Now open the browser and visit:
http://localhost:5173

