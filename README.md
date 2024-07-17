# Chat Mate AI

## Overview

This project is a chat bot leveraging OpenAI's GPT-4.0 model, implemented
using React and TypeScript for the front end, Express for the backend, and MongoDB for data
storage and OpenAI API . The application provides users with an interactive interface to engage
in natural language conversations with the GPT-4.0  model.

## Features

- **Conversational Interface:** Users can have dynamic and natural language
  conversations by inputting prompts or queries.

- **Backend Integration:** The Express backend manages communication with the
  OpenAI API, handling requests and responses seamlessly.

- **Data Persistence:** MongoDB is employed for storing user data, including
  prompts and model responses.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

## Setup

1.  Clone the repository:

    
    git clone https://github.com/ShreyGrg03/ChatMate
    

2.  Navigate to the project directory:

    
    cd Chat Mate Ai
    

3.  Install dependencies for both the client and server:

    ```
    # Install frontend dependencies
    cd frontend
    npm install

    # Install backend dependencies
    cd backend
    npm install
    ```

4.  Configure environment variables:

    Create the `.env` file in the `backend` directory and add the following variables:

        
        OPENAI_API_KEYSET=your_openai_api_key
        MONGODB_URL=your_mongodb_uri
        

5.  Start the application:

    ```
    # Start the client (in the frontend directory)
    cd frontend
    npm run dev

    # Start the server (in the backed directory)
    cd backend
    npm run dev
    ```

## Notes

- Make sure to replace `your_openai_api_key` and `your_mongodb_url` with your
  actual OpenAI API key and MongoDB connection URI in the `.env` file.

## Website Screenshots

### Home Page

![Screenshot 2024-07-18 001258](https://github.com/user-attachments/assets/e0ec50d0-1321-4922-b960-dd767ad95aa7)

### Login Page

![image](https://github.com/user-attachments/assets/e0e67748-aacb-425e-9300-726e217acc9b)



### SignUp Page

![image](https://github.com/user-attachments/assets/2a2f1d38-64d3-4715-bdf2-704610da1b9f)



### Chat Page

![image](https://github.com/user-attachments/assets/fa95ba0f-3820-460a-9b44-9c5ca247108b)



