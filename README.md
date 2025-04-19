# CodeQuests

CodeQuests is a web-based platform designed to help developers improve their coding skills through daily challenges. It allows users to participate in daily coding challenges, submit solutions, and interact with a community of other developers. The platform is built with a full-stack technology stack using **React** for the frontend, **Node.js** and **Express** for the backend, and **MongoDB** as the database.

---

## Table of Contents

- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Frontend Usage](#frontend-usage)
- [Backend Usage](#backend-usage)
- [Contributing](#contributing)
- [License](#license)

---

## Project Description

CodeQuests is a daily coding challenge platform designed to motivate developers to practice and improve their skills. It offers daily challenges in different difficulty levels, and users can submit solutions to these challenges. The platform provides a fun and interactive way to enhance coding knowledge and stay consistent in practicing coding tasks.

### Key Features:
- **Daily Challenges**: Users can view a new coding challenge every day.
- **Submit Solutions**: Users can submit solutions to challenges in different programming languages.
- **Solution Viewing**: View peer-submitted solutions to learn different approaches.
- **Challenge Difficulty Levels**: Challenges are categorized based on their difficulty (Easy, Medium, Hard).
- **Tagging System**: Challenges are tagged with relevant technologies to make it easier to search.
- **Admin Panel**: Admin can add, update, or delete challenges from the system.
- **Authentication**: Users can register, log in, and track their submitted solutions.

---

## Tech Stack

- **Frontend**:
  - React.js
  - HTML/CSS/JavaScript
  - Axios for API requests

- **Backend**:
  - Node.js with Express.js
  - MongoDB (for storing challenges and solutions)
  - Mongoose (for database interaction)
  - JWT for user authentication (JSON Web Tokens)
  
- **Development Tools**:
  - Git for version control
  - Postman for API testing
  - Nodemon for auto-reloading the backend during development

---

## Features

### 1. **Daily Challenge**:
   - View a new challenge each day.
   - View challenge prompt, difficulty level, and tags.
   
### 2. **Add Challenges**:
   - Admin can add new challenges to the system via an API route.
   - New challenges can be added with a prompt, difficulty level, and tags.
   
### 3. **Submit Solutions**:
   - Users can submit their solutions to challenges in different programming languages.
   - Solutions are stored in the database and linked to the specific challenge.
   - Users can only submit solutions to the current day's challenge.
   
### 4. **View Solutions**:
   - After solving a challenge, users can view solutions submitted by other users.
   - This feature helps users learn different approaches to solving a problem.
   
### 5. **User Authentication**:
   - Users can register and log in to the platform to track their progress.
   - JWT (JSON Web Token) is used for secure authentication and authorization.
   
### 6. **Admin Panel**:
   - Admins can manage challenges by adding, updating, or deleting them through a protected API.
   - Admins also have the ability to view all user submissions and solution statuses.

---

## Setup & Installation

### Prerequisites

- **Node.js** and **npm** must be installed on your machine. If you don't have them installed, download and install from [here](https://nodejs.org/).
- **MongoDB** should be installed and running locally, or you can use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

### Step 1: Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/yourusername/CodeQuests.git

```

### Step 2: Install Dependencies

Navigate to the project folder and install dependencies for both the **frontend** and **backend**.

#### For the Backend:

```bash
cd CodeQuests/backend
npm install
```

For the Frontend:
```bash
cd ../frontend
npm install
```

### Step 3: Configure Environment Variables
Backend:
Create a .env file in the backend folder and add your MongoDB URI for database connection:

```ini

MONGO_URI=mongodb://localhost:27017/codequests
JWT_SECRET=your_jwt_secret_key
```

### Step 4: Start the Backend
Run the backend server:

```bash
cd backend
npm run dev
The backend will be running on http://localhost:5000.
```

### Step 5: Start the Frontend
Now, run the React frontend:

```bash
cd frontend
npm start
The frontend will be running on http://localhost:3000.
```
---

## Frontend Usage
Once the frontend is running, you can access the platform in your browser at http://localhost:3000.

### Key Pages:
### Login/Registration Page: Users can log in or register to track their solutions.
### Home Page: Displays the daily challenge for the user.
### Challenge Details: Users can click on the challenge to see the prompt, difficulty, and tags.
### Solution Submission: After solving the challenge, users can submit their solutions.
### View Solutions: After submitting a solution, users can view other users' solutions for the same challenge.

## Backend Usage
The backend provides the following API routes:

### Auth Routes:
- POST /api/auth/register: Registers a new user.
- POST /api/auth/login: Logs in a user and provides a JWT token for authentication.

### Challenge Routes:
- GET /api/challenges/today: Fetch the daily challenge for today.
- GET /api/challenges: Fetch a list of all challenges.
- POST /api/challenges/add: Admin route to add new challenges (requires authentication).
- GET /api/challenges/:id: Fetch details of a specific challenge by its ID.

### Solution Routes:
- POST /api/solutions/submit: Submit a solution for a challenge.
- GET /api/solutions/:challengeId: Get solutions for a specific challenge. 

## Contributing
We welcome contributions! If you'd like to contribute to this project, please follow these steps:
- Fork the repository.
- Clone your fork to your local machine.
- Create a new branch for your changes.
- Make your changes and test them.
- Commit your changes with meaningful messages.
- Push your changes to your fork.
- Submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
Enjoy your coding journey with CodeQuests! 🚀

---

This markdown version of the `README.md` file is now complete with the necessary details about the project, including authentication, backend and frontend setup, API routes, and more. It should provide a clear guide for anyone who wants to use or contribute to your project.

Let me know if you'd like to add more details or adjustments! 😊
