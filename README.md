
# User Feedback System

## Project Overview
The **User Feedback System** is a full-stack web application for collecting user feedback. It features a form where users can submit their name, email, feedback message, and category. The data is sent to a backend API and stored in a MongoDB database.

This project is built with the **MERN stack** (MongoDB, Express, React, Node.js) and is designed to be lightweight, functional, and easy to deploy.

---

## Features
- Submit feedback via a form
- Store feedback securely in MongoDB
- RESTful API integration
- Environment-based configuration
- CORS enabled for safe frontend-backend communication
- Error handling and input reset after submission
- Built frontend can be served via backend

---

## Tech Stack

| Layer        | Technology                     |
|--------------|-------------------------------|
| Frontend     | React, Axios                  |
| Backend      | Node.js, Express              |
| Database     | MongoDB, Mongoose             |
| Other Tools  | dotenv, cors, concurrently    |

---

## Project Structure

```
user-feedback-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── public/          ← (Place frontend build here)
│   ├── app.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── vite.config.js / or CRA config
├── README.md
```

---

## Setup and Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/user-feedback-system.git
cd user-feedback-system
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file inside `/backend`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017
DB_NAME=feedbackDB
CORS_ORIGIN=http://localhost:3000
```

- Start the server:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

- Run the app locally (for development):

```bash
npm start
```

#### ✅ OR Build and Serve via Backend

If you want to serve the frontend from the backend:

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Copy the build output (usually in `dist/` or `build/`) to the `backend/public` folder.

3. In `backend/app.js`, add:

   ```js
   import path from 'path';
   import { fileURLToPath } from 'url';

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);

   app.use(express.static(path.join(__dirname, 'public')));
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });
   ```

4. Now run only the backend and access everything from `http://localhost:5000`.

---

## API Routes

- `POST /feedback` – Submit new feedback  
- (Optional) `GET /feedback` – Fetch all feedback entries

### Example Request:

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "feedback": "Great app!",
  "category": "suggestion"
}
```

---

## Author

- **Diksha Negi**
- [GitHub](https://github.com/diksha-negi)
- [LinkedIn](https://linkedin.com/in/dikshanegiii)

---

## License

This project is licensed under the **MIT License**.

---
