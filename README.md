# 🔐 Authentication System API

A RESTful Authentication API built with "Node.js", "Express.js", "MongoDB" and "JWT".  
This project demonstrates authentication, authorization, password hashing, and role-based access control using MVC architecture.

---

## 🚀 Features

- User Signup
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Role-Based Authorization (User & Admin)
- Admin can view all users
- Admin can delete users
- MVC Architecture
- MongoDB Database Integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv

---

## 📁 Project Structure

Authentication-System/
│
├── config/
│ └── database.js
│
├── controllers/
│ └── usercontrollers.js
│
├── middlewares/
│ └── authmiddleware.js
│
├── models/
│ └── user.js
│
├── routes/
│ └── userroutes.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md

---

## 📌 API Endpoints

---

Main route path: /api/users

---

### 🔐 Auth Routes

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| POST   | /signup  | Register user |
| POST   | /login   | Login user    |

---

### 👤 User Routes

| Method | Endpoint | Access              |
| ------ | -------- | ------------------- |
| GET    | /profile | User (JWT required) |
| GET    | /        | Admin only          |
| DELETE | /:id     | Admin only          |

---

## 🔑 Authentication

All protected routes require a JWT token.

### Header format:

```http
Authorization: Bearer <your_token>
```

---

## 👥 Roles

User

- Can signup
- Can login
- Can view profile
  Admin
- Can view all users
- Can delete users

Note: Users are created with role = "user" by default.
Admin role is assigned manually in the database for learning purposes.

---

## Testing done by

Used Postman to test all API endpoints.

---

## 📚 Concepts Covered

- REST API development
- MVC architecture
- Authentication & Authorization
- Password hashing (bcrypt)
- JWT tokens
- Middleware
- MongoDB with Mongoose
- Role-based access control

---

## Author

Meghana Palavalasa

---
