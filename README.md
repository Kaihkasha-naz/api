Secure Todo List API with JWT Authentication 
 
## Project Description
 
This is a Node.js-based application that provides a secure Todo List API. It uses JWT (JSON Web Tokens) for authentication to ensure secure access to the API endpoints. The project is designed for robust and secure management of user tasks. 
 
--- 
 
Features 
 
>>User Authentication 
 
. Signup (POST /auth/signup): Create 
 
. Sign In (POST /auth/signin): Log in to get a JWT token. 
 
>>Todo Management 
 
. Create, read, update, and delete todos. 
 
. Access restricted to authenticated users only. 
 
>>Data Storage 
 
. MongoDB is used to store user credentials and todos. 
 
## Prerequisites 
To run this application, you need to have the following installed on your system: 
 
1. Node.js (v14 or above) 
2. npm (Node Package Manager) 
3. MongoDB (Local or hosted database) 
4. A tool like Postman for testing the API 
 
--- 
 
## Installation and Setup 
 
1. Clone the Repository: 
      git clone <repository-url> 
   cd todo api 
    
 
2. Install Dependencies: 
      npm install 
    
 
3. Set Up Environment Variables: 
   Create a .env file in the root of the project and add the following: 
      PORT=5000 
   MONGO_URI=<Your MongoDB Connection String> 
   JWT_SECRET=<Your JWT Secret> 
    
 
4. Start the Application: 
   
          npm start 
        
 
5. Test the API 
 
Use Postman or another tool to interact with the API. 
 
The server will run on http://localhost:5000 . 
--- 
 
## API Endpoints 
 
### Authentication 
 
#### 1. Register a User 
- URL: /auth/signup 
- Method: POST 
- Description: Register a new user. 
- Body: 
    { 
    "name": "username", 
    "password": "password123" 
  } 
   
 
#### 2. Login 
- URL: /auth/signin 
- Method: POST 
- Description: Authenticate a user and return a JWT token. 
- Body: 
    { 
     "name": "username", 
    "password": "password123" 
  } 
   
 
--- 
 
### Todo Management 
 
#### 1. Create a Todo 
- URL: /todos 
- Method: POST 
- Headers: 
    { 
    "Authorization": "Bearer <JWT Token>" 
  } 
   
- Body: 
    { 
    "title": "Complete Project", 
    
  }

#### 2. Get All Todos 
- URL: /todos 
- Method: GET 
- Headers: 
    { 
    "Authorization": "Bearer <JWT Token>" 
  } 
   
- Description: Retrieve all todos for the authenticated user. 
 
 
  #### 3. Get a specific  Todo 
- URL: /todos/:id 
- Method: POST 
- Headers: 
    { 
    "Authorization": "Bearer <JWT Token>" 
  } 
   
- Body: 
    { 
    "title": "Complete Project", 
    
  } 
 
#### 4. Update a Todo 
- URL: /todos/:id 
- Method: PUT 
- Headers: 
    { 
    "Authorization": "Bearer <JWT Token>" 
  } 
   
- Body: 
    { 
    "title": "Updated Title", 
    "completed": true 
  } 
   
 
#### 5. Delete a Todo 
- URL: /todos/:id 
- Method: DELETE 
- Headers: 
    { 
    "Authorization": "Bearer <JWT Token>" 
  } 
   
 
--- 
 
## Notes 
- Replace <JWT Token> in the headers with the token received after login. 
- Ensure MongoDB is running and accessible via the connection string provided in the .env file.

## Technologies Used

. Node.js
. Express.js
. MongoDB
. bcrypt for password hashing
. jsonwebtoken (JWT) for authentication
. dotenv for environment variables
 
 
---
