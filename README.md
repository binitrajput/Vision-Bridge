# 🎥 Vision Bridge

<p align="center">
  <b>Real-Time Video Conferencing Platform built using MERN, WebRTC & Socket.io</b>
</p>

<p align="center">

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success?logo=mongodb)
![Socket.io](https://img.shields.io/badge/Socket.io-Real--Time-black?logo=socket.io)
![WebRTC](https://img.shields.io/badge/WebRTC-Peer--to--Peer-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

</p>

---

## 🚀 Live Demo

🔗 **Frontend:** https://vision-bridge-frontend.onrender.com/

📂 **GitHub Repository:** https://github.com/binitrajput/Vision-Bridge

---

# 📖 Overview

Vision Bridge is a full-stack real-time video conferencing platform that enables users to securely create and join meetings with high-quality audio and video communication.

The application uses **WebRTC** for peer-to-peer media streaming, **Socket.io** for signaling, and the **MERN stack** for user authentication, meeting management, and persistent storage.

---

# ✨ Features

- 🔐 Secure User Authentication
- 🎥 HD Video Calling
- 🎤 Real-Time Audio Communication
- 👥 Create & Join Meetings
- ⚡ WebRTC Peer-to-Peer Streaming
- 🔄 Socket.io Signaling Server
- 📜 Meeting History
- ☁️ MongoDB Atlas Integration
- 🔒 Password Hashing using Bcrypt
- 📱 Responsive UI

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Material UI
- Axios
- CSS Modules

## Backend

- Node.js
- Express.js
- Socket.io
- JWT Authentication
- Bcrypt
- Mongoose

## Database

- MongoDB Atlas

## Real-Time Communication

- WebRTC
- Socket.io

## Deployment

- Render

---

# 🏗 System Architecture

```text
                   React Frontend
                          │
                Axios HTTP Requests
                          │
                  Express REST API
                          │
      ┌───────────────────┴───────────────────┐
      │                                       │
MongoDB Atlas                        Socket.io Server
                                              │
                                      WebRTC Signaling
                                              │
                                  Peer-to-Peer Connection
                                              │
                                    Video & Audio Stream
```

---

# 📂 Project Structure

```text
Vision-Bridge
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── managers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   └── app.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── contexts
│   │   ├── pages
│   │   ├── styles
│   │   ├── utils
│   │   └── App.js
│
└── README.md
```

---

# 📸 Screenshots

## 🏠 Landing Page

![Landing](screenshots/landing.png)

---

## 🔐 Login / Register

![Login](screenshots/login.png)

---

## 🎥 Video Meeting

![Meeting](screenshots/meeting.png)

---

## 📜 Meeting History

![History](screenshots/history.png)

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/binitrajput/Vision-Bridge.git
```

```bash
cd Vision-Bridge
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a **.env**

```env
PORT=8000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

Run backend

```bash
npm run dev
```

---

## 3. Frontend Setup

Open another terminal

```bash
cd frontend
npm install
npm start
```

Application runs on

```text
Frontend → http://localhost:3000

Backend → http://localhost:8000
```

---

# 🔮 Future Improvements

- 📺 Screen Sharing
- 💬 Chat Messaging
- 🎙 Meeting Recording
- 📂 File Sharing
- 📅 Meeting Scheduling
- 🌙 Dark Mode
- 📱 Better Mobile Experience

---

# 📚 What I Learned

- Building scalable MERN applications
- WebRTC Peer Connections
- Socket.io Signaling
- JWT Authentication
- MongoDB Atlas
- REST API Development
- React Context API
- Real-Time Communication Systems
- Full-Stack Deployment

---

# 👨‍💻 Author

### Binit Rajput

- GitHub: https://github.com/binitrajput
- LinkedIn: *(Add your LinkedIn URL)*

---

<p align="center">

⭐ If you found this project helpful, consider giving it a star!

</p>