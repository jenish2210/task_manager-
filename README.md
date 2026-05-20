# ✨ Task Manager Web Application

A modern and responsive **Task Manager Web Application** built using **Django, Django REST Framework, JWT Authentication, SQLite, HTML, CSS, and JavaScript**.

This project was developed as part of a **Python Developer Internship Task**.  
It includes secure authentication, task management APIs, and a luxury glassmorphism UI with a purple-white theme.

---

# 🚀 Live Demo

🔗 Deployment Link:  
[live link here](https://task-manager-k9l0.onrender.com)

---

# 📸 Preview

## Features Included

✅ User Registration  
✅ User Login  
✅ JWT Authentication  
✅ Create Tasks  
✅ View Tasks  
✅ Complete Tasks  
✅ Delete Tasks  
✅ Task Filtering  
✅ Pagination  
✅ Responsive Design  
✅ Secure APIs  
✅ SQLite Database  
✅ Docker Support

---

# 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| Django | Backend Framework |
| Django REST Framework | REST APIs |
| SimpleJWT | JWT Authentication |
| SQLite | Database |
| HTML | Frontend Structure |
| CSS | Styling |
| JavaScript | Frontend Logic |
| Docker | Containerization |

---

# 📂 Project Structure

```bash
task_manager/
│
├── backend/
│   ├── settings.py
│   ├── urls.py
│   └── views.py
│
├── users/
│   └── Authentication APIs
│
├── tasks/
│   └── Task CRUD APIs
│
├── frontend/
│   ├── login.html
│   ├── register.html
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── login.js
│   └── register.js
│
├── requirements.txt
├── Dockerfile
├── README.md
└── .env.example
```

---

# 🔐 Authentication

This project uses **JWT Authentication**.

After login, an access token is generated and stored in browser local storage.

Protected APIs require:

```bash
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/register/` | Register User |
| POST | `/api/login/` | Login User |
| POST | `/api/token/refresh/` | Refresh Token |

---

## Tasks

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks/` | Get All Tasks |
| POST | `/api/tasks/` | Create Task |
| GET | `/api/tasks/id/` | Get Single Task |
| PUT | `/api/tasks/id/` | Update Task |
| DELETE | `/api/tasks/id/` | Delete Task |

---

# 🎨 UI Design

The frontend features a modern:

✨ Glassmorphism Design  
✨ Luxury Purple-White Theme  
✨ Responsive Layout  
✨ Smooth Hover Effects  
✨ Mobile-Friendly UI

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/jenish2210/task_manager-
```

---

## 2️⃣ Move Into Project Folder

```bash
cd task_manager
```

---

## 3️⃣ Create Virtual Environment

```bash
python -m venv env
```

---

## 4️⃣ Activate Environment

### Windows

```bash
env\Scripts\activate
```

### Mac/Linux

```bash
source env/bin/activate
```

---

## 5️⃣ Install Requirements

```bash
pip install -r requirements.txt
```

---

## 6️⃣ Run Migrations

```bash
python manage.py migrate
```

---

## 7️⃣ Run Server

```bash
python manage.py runserver
```

---

# 🌐 Run Frontend

Open:

```bash
frontend/login.html
```

Recommended:

Use **VS Code Live Server Extension**.

---

# 🧪 Run Tests

```bash
python manage.py test
```

---

# 🐳 Docker Support

## Build Docker Image

```bash
docker build -t task-manager .
```

## Run Container

```bash
docker run -p 8000:8000 task-manager
```

---

# 📄 Environment Variables

Create `.env` file:

```env
SECRET_KEY=your_secret_key
DEBUG=True
```

---

# 🔒 Security Features

✅ Password Hashing  
✅ JWT Authentication  
✅ User-Specific Tasks  
✅ Protected APIs  
✅ Secure Database Access

---

# 📱 Responsive Design

The application is fully responsive and works on:

✅ Desktop  
✅ Tablet  
✅ Mobile Devices

---

# 🚀 Deployment

Recommended Platforms:

- Render
- Railway
- Vercel

---

# 👨‍💻 Author

## Jenish

Python Full Stack Developer  
Passionate about building modern web applications using Django and JavaScript.

---

# ⭐ Future Improvements

- Dark/Light Theme Toggle
- Task Due Dates
- Email Notifications
- Drag & Drop Tasks
- User Profile Section
- Task Categories

---

# 📃 License

This project is created for educational and internship evaluation purposes.

---

# 💜 Thank You

Thank you for reviewing this project.
I hope you like the design and implementation ✨
