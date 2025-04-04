# IMF Gadget API


## 🕵️‍♂️ Mission Overview

The Impossible Missions Force (IMF) Gadget API is a secure RESTful service designed to manage the organization's high-tech gadget inventory. This API provides endpoints for gadget management, including creation, updates, decommissioning, and self-destruct sequences.

Built with TypeScript, Node.js, Express, and PostgreSQL with Prisma ORM, this API implements robust authentication, error handling, and follows best practices for secure API development.

## 🚀 Live Demo

The API is deployed and accessible at:
[https://your-deployed-api-url.com](https://phoenix-imf-gadget-api-development-2i7r.onrender.com/)

## 📚 API Documentation

Comprehensive API documentation is available at:
[https://your-swagger-documentation-url.com](https://your-swagger-documentation-url.com)

## 🔧 Technologies Used

- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Express Validator
- **Security**: Helmet, CORS
- **Deployment**: [Your Deployment Platform]

## ✨ Features

- **Secure Authentication**: JWT-based authentication system for secure access
- **Gadget Management**: Complete CRUD operations for gadget inventory
- **Random Codename Generation**: Automatically assigns unique codenames to new gadgets
- **Mission Success Probability**: Generates random success probability for each gadget
- **Soft Delete**: Decommissions gadgets instead of permanently deleting them
- **Self-Destruct Sequence**: Allows triggering of self-destruct sequences with confirmation codes
- **Status Filtering**: Filter gadgets by their current status
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **Input Validation**: Request validation to ensure data integrity

## 🏗️ Project Structure
```bash
src/
├── controllers/       # Request handlers
│   ├── auth.controller.ts
│   └── gadget.controller.ts

├── middleware/        # Custom middleware
│   ├── auth.middleware.ts
│   └── validate.middleware.ts

├── routes/            # API routes
│   ├── auth.routes.ts
│   └── gadget.routes.ts

├── utils/             # Utility functions
│   ├── error.handler.ts
│   └── prisma.client.ts

├── app.ts             # Express app setup
└── server.ts          # Server entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/imf-gadget-api.git
   cd imf-gadget-api

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/imf_gadgets?schema=public"
JWT_SECRET="your-super-secret-key-for-jwt-tokens"
PORT=3000
```

4.Run database migrations:
```bash
npx prisma migrate dev --name init
```

5.Start the development server:
```bash
npm run dev
# or
yarn dev
```

## 🔐 API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new agent
- **POST /api/auth/login**: Login an agent


### Gadgets

- **GET /api/gadgets**: Get all gadgets (with optional status filter)
- **POST /api/gadgets**: Add a new gadget
- **PATCH /api/gadgets/:id**: Update a gadget
- **DELETE /api/gadgets/:id**: Decommission a gadget
- **POST /api/gadgets/:id/self-destruct**: Trigger self-destruct sequence


### Health Check

- **GET /health**: Check if the API is running


## 📝 Usage Examples

### Register a new agent :
```bash
curl -X POST https://your-api-url.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "agent007", "password": "secret123"}'
```
Login :
```bash
curl -X POST https://your-api-url.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "agent007", "password": "secret123"}'
```
Get all gadgets :
```bash
curl -X GET https://your-api-url.com/api/gadgets \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

Filter gadgets by status :
```bash
curl -X GET https://your-api-url.com/api/gadgets?status=Available \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```
Add a new gadget : 
```bash
curl -X POST https://your-api-url.com/api/gadgets \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"status": "Available"}'
```
Update a gadget :
```bash
curl -X PATCH https://your-api-url.com/api/gadgets/GADGET_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"name": "The Stealth Eagle", "status": "Deployed"}'
```
Decommission a gadget :
```bash
curl -X DELETE https://your-api-url.com/api/gadgets/GADGET_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```
Trigger self-destruct sequence :
```bash
curl -X POST https://your-api-url.com/api/gadgets/GADGET_ID/self-destruct \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔒 Security Features

- JWT authentication for secure API access
- Password hashing with bcrypt
- Request validation with express-validator
- Protection against common web vulnerabilities with helmet
- CORS configuration for controlled resource sharing

## 📈 Future Improvements

- Add refresh token functionality
- Implement rate limiting
- Add more comprehensive logging
- Create a frontend dashboard for gadget management
- Implement role-based access control

  ## 👨‍💻 Author

Your Name : Surya Sourav Parida 

This README was last updated on [Current Date].

*This message will self-destruct in 5 seconds... Just kidding!*

Made With ❤️ by Surya For Upraised
