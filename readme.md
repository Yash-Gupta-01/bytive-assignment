# Bytive Assignment

## Project Description
This project is a simple Todo application built with Express.js and MongoDB. It allows users to create, read, update, and delete tasks. The application also includes JWT-based authentication for secure access to the API endpoints.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd bytive-assignment
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    node server.js
    ```
2. The server will be running at `http://localhost:4444`.

## API Endpoints

### User Authentication

- **Register a new user**
    ```http
    POST /api/users/register
    ```
    - Request body:
        ```json
        {
            "username": "your_username",
            "password": "your_password"
        }
        ```

- **Login a user**
    ```http
    POST /api/users/login
    ```
    - Request body:
        ```json
        {
            "username": "your_username",
            "password": "your_password"
        }
        ```
    - Response:
        ```json
        {
            "token": "your_jwt_token"
        }
        ```

### Todo Tasks

- **Create a task**
    ```http
    POST /tasks
    ```
    - Request headers:
        ```http
        Authorization: Bearer your_jwt_token
        ```
    - Request body:
        ```json
        {
            "name": "Task name",
            "description": "Task description"
        }
        ```

- **Get all tasks**
    ```http
    GET /tasks
    ```
    - Request headers:
        ```http
        Authorization: Bearer your_jwt_token
        ```

- **Get a task by ID**
    ```http
    GET /tasks/:id
    ```
    - Request headers:
        ```http
        Authorization: Bearer your_jwt_token
        ```

- **Update task status by ID**
    ```http
    PUT /tasks/:id
    ```
    - Request headers:
        ```http
        Authorization: Bearer your_jwt_token
        ```
    - Request body:
        ```json
        {
            "status": "completed"
        }
        ```

- **Delete a task by ID**
    ```http
    DELETE /tasks/:id
    ```
    - Request headers:
        ```http
        Authorization: Bearer your_jwt_token
        ```

## Dependencies

- express: ^4.21.2
- cors: ^2.8.5
- mongoose: ^8.9.3
- bcryptjs: ^2.4.3
- jsonwebtoken: ^9.0.2
