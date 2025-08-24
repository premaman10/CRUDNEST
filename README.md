
# 📝 Todo List API  

A **RESTful API** for a Todo List application built with **Node.js, Express, MongoDB Atlas, and JWT authentication**.  
Users can **register, log in, and perform CRUD operations** (Create, Read, Update, Delete) on todos.  
All routes are protected using **JWT-based authentication**.  

🚀 Fully deployable to **Vercel** as a serverless API.  

---

## ✨ Features  

- 🔐 **JWT Authentication** (Register & Login)  
- ➕ **Create** todos  
- 📖 **Read** user-specific todos  
- ✏️ **Update** todos (toggle completion)  
- ❌ **Delete** todos  
- ☁️ **MongoDB Atlas** for cloud-based storage  
- ⚡ **Vercel** serverless deployment  

---

## 🛠️ Tech Stack  

- **Node.js & Express** → Backend framework  
- **MongoDB Atlas** → Cloud database  
- **Mongoose** → ODM for MongoDB  
- **JWT** → Token-based authentication  
- **Bcryptjs** → Password hashing  
- **Vercel** → Deployment platform  

---

## ⚙️ Setup  

### 1. Clone the Repository  


### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a **.env** file in the project root:



### 4. Run Locally

```bash
npm run dev
```

---

## 🔑 API Endpoints

### Authentication

* **POST** `/api/auth/register` → Register a user

  ```json
  { "username": "test", "password": "pass" }
  ```
* **POST** `/api/auth/login` → Log in and get JWT

  ```json
  { "username": "test", "password": "pass" }
  ```

### Todos (Require `Authorization: Bearer <token>`)

* **GET** `/api/todos` → Get all todos
* **POST** `/api/todos` → Create a todo

  ```json
  { "text": "Buy milk" }
  ```
* **PUT** `/api/todos/:id` → Toggle todo completion
* **DELETE** `/api/todos/:id` → Delete a todo

---

## 📘 API Documentation

Access interactive **Swagger documentation** at `/api-docs`:

* Local: `http://localhost:5000/api-docs`
* Vercel: `https://todo-api.vercel.app/api-docs`

---

## 🚀 Deployment on Vercel

1. Push your repo to GitHub
2. Connect repo to **Vercel Dashboard**
3. Add environment variables in **Vercel → Project Settings → Environment Variables**
4. Deploy!

Example `vercel.json` (optional):

```json
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "index.js" }
  ]
}
```

---

## 🧪 Testing

* Use **Postman** or **Thunder Client**
* Add `Authorization: Bearer <your_token>` in request headers for protected routes

---

## 📜 License

This project is licensed under the **MIT License**.

```

👉 Do you also want me to **add the Swagger setup instructions** (like how to configure `swagger-jsdoc` & `swagger-ui-express` in your Express app) inside the README, docs` is generated?
```
