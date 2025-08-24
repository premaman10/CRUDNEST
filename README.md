Todo List API
A RESTful API for a Todo List application built with Node.js, Express, MongoDB Atlas, and JWT authentication. Users can register, log in, and perform CRUD operations (Create, Read, Update, Delete) on todos, with all routes protected by token-based authentication.
Features

User registration and login with JWT.
Create, read, update, and delete todos.
Todos are user-specific (stored in MongoDB Atlas).
Deployable to Vercel as a serverless API.

Tech Stack

Node.js & Express: Backend framework.
MongoDB Atlas: Cloud database for storing users and todos.
Mongoose: ODM for MongoDB.
JWT: Token-based authentication.
Bcryptjs: Password hashing.
Vercel: Deployment platform.

Setup

Clone the repository:git clone https://github.com/yourusername/todo-api.git
cd todo-api


Install dependencies:npm install


Create a .env file with:MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abzrevk.mongodb.net/todoDB?retryWrites=true&w=majority
PORT=5000
JWT_SECRET=your_jwt_secret


Run locally:npm run dev



API Endpoints

POST /api/auth/register: Register a user ({ "username": "test", "password": "pass" }).
POST /api/auth/login: Log in and get JWT ({ "username": "test", "password": "pass" }).
GET /api/todos: Get all todos (requires Authorization: Bearer <token>).
POST /api/todos: Create a todo ({ "text": "Buy milk" }, with token).
PUT /api/todos/:id: Toggle todo completion (with token).
DELETE /api/todos/:id: Delete a todo (with token).

Deployment
Deployed on Vercel:

Configure environment variables in Vercel dashboard.
Use vercel.json for serverless setup.

Testing
Use Postman or Thunder Client to test endpoints. Ensure Authorization header is set for protected routes.
