Sure! Below is a sample `README.md` file for your project.

### README.md

```markdown
# REST API Documentation

This project provides a RESTful API for managing various entities such as Officer Bio Data, Officer Welfare Information, Officer Current Posting, Officer Promotion History, Officer Training, and authentication.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Available Endpoints](#available-endpoints)
  - [Authentication](#authentication)
  - [Officer Bio Data](#officer-bio-data)
  - [Officer Welfare Information](#officer-welfare-information)
  - [Officer Current Posting](#officer-current-posting)
  - [Officer Promotion History](#officer-promotion-history)
  - [Officer Training](#officer-training)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

## Prerequisites

- Node.js
- npm or yarn
- PostgreSQL or any other supported database

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Abubakar-Abdulwahab/smartforce-backend
    cd your-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up the environment variables. Create a `.env` file in the root directory and add the following:
    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_USER=your-username
    DATABASE_PASSWORD=your-password
    DATABASE_NAME=your-database
    JWT_SECRET=your-secret-key
    ```

4. Run the database migrations:
    ```bash
    npm run typeorm migration:run
    # or
    yarn typeorm migration:run
    ```

## Running the Application

1. Start the server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. The server will be running at `http://localhost:3000`.

## API Documentation

The API documentation is available via Swagger. Once the server is running, navigate to `http://localhost:3000/api-docs` to view the documentation and test the endpoints.

## Available Endpoints

### Authentication

- **POST** `/signup`
  - Description: Sign up a new user.
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```

- **POST** `/login`
  - Description: Log in a user.
  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password"
    }
    ```

- **POST** `/logout`
  - Description: Log out a user.
  - Headers: 
    - `Authorization: Bearer <token>`

### Officer Bio Data

- **GET** `/officer-bio-data`
  - Description: Retrieve all officer bio data.

- **POST** `/officer-bio-data`
  - Description: Add new officer bio data.
  - Request Body:
    ```json
    {
      "name": "John",
      "lastName": "Doe",
      ...
    }
    ```

- **GET** `/officer-bio-data/:id`
  - Description: Retrieve officer bio data by ID.

- **PUT** `/officer-bio-data/:id`
  - Description: Update officer bio data by ID.
  - Request Body:
    ```json
    {
      "name": "John",
      "lastName": "Doe",
      ...
    }
    ```

- **DELETE** `/officer-bio-data/:id`
  - Description: Delete officer bio data by ID.

### Officer Welfare Information

- **GET** `/officer-welfare-information`
  - Description: Retrieve all officer welfare information.

- **POST** `/officer-welfare-information`
  - Description: Add new officer welfare information.
  - Request Body:
    ```json
    {
      "ippis": "123456",
      "bank": "Bank Name",
      ...
    }
    ```

- **GET** `/officer-welfare-information/:id`
  - Description: Retrieve officer welfare information by ID.

- **PUT** `/officer-welfare-information/:id`
  - Description: Update officer welfare information by ID.
  - Request Body:
    ```json
    {
      "ippis": "123456",
      "bank": "Bank Name",
      ...
    }
    ```

- **DELETE** `/officer-welfare-information/:id`
  - Description: Delete officer welfare information by ID.

### Officer Current Posting

- **GET** `/officer-current-postings`
  - Description: Retrieve all officer current postings.

- **POST** `/officer-current-postings`
  - Description: Add new officer current posting.
  - Request Body:
    ```json
    {
      "category": "Category",
      "rank": "Rank",
      ...
    }
    ```

- **GET** `/officer-current-postings/:id`
  - Description: Retrieve officer current posting by ID.

- **PUT** `/officer-current-postings/:id`
  - Description: Update officer current posting by ID.
  - Request Body:
    ```json
    {
      "category": "Category",
      "rank": "Rank",
      ...
    }
    ```

- **DELETE** `/officer-current-postings/:id`
  - Description: Delete officer current posting by ID.

### Officer Promotion History

- **GET** `/officer-promotion-history`
  - Description: Retrieve all officer promotion histories.

- **POST** `/officer-promotion-history`
  - Description: Add new officer promotion history.
  - Request Body:
    ```json
    {
      "rankId": 1,
      "periodOfService": "2 years",
      ...
    }
    ```

- **GET** `/officer-promotion-history/:id`
  - Description: Retrieve officer promotion history by ID.

- **PUT** `/officer-promotion-history/:id`
  - Description: Update officer promotion history by ID.
  - Request Body:
    ```json
    {
      "rankId": 1,
      "periodOfService": "2 years",
      ...
    }
    ```

- **DELETE** `/officer-promotion-history/:id`
  - Description: Delete officer promotion history by ID.

### Officer Training

- **GET** `/officer-trainings`
  - Description: Retrieve all officer trainings.

- **POST** `/officer-trainings`
  - Description: Add new officer training.
  - Request Body:
    ```json
    {
      "nameOfTraining": "Training Name",
      "dateOfCompletion": "2023-01-01",
      ...
    }
    ```

- **GET** `/officer-trainings/:id`
  - Description: Retrieve officer training by ID.

- **PUT** `/officer-trainings/:id`
  - Description: Update officer training by ID.
  - Request Body:
    ```json
    {
      "nameOfTraining": "Training Name",
      "dateOfCompletion": "2023-01-01",
      ...
    }
    ```

- **DELETE** `/officer-trainings/:id`
  - Description: Delete officer training by ID.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This `README.md` provides an overview of your project, including how to get started, run the application, and details about the available endpoints with Swagger documentation.
