# Menu Management API

A robust REST API for managing restaurant menus with users, categories, subcategories, and items.

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/vaibhav-chittora/Menu-Management-NodeJS.git

```

2. Install dependencies

```bash
cd Menu-Management-NodeJS
npm install

```

3.Create .env file in root directory with following variables:

```bash
PORT=3000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Start the server

```bash
npm start
```

5. Server will run on port 3000

```bash
 http://localhost:3000

```

## API Endpoints

### Authentication

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| POST   | `/api/v1/auth/signup` | Register a new user |
| POST   | `/api/v1/auth/signin` | Login existing user |

### Users

| Method | Endpoint               | Description      |
| ------ | ---------------------- | ---------------- |
| GET    | `/api/v1/user/getUser` | Get user details |

### Categories

| Method | Endpoint                  | Description           |
| ------ | ------------------------- | --------------------- |
| POST   | `/api/v1/category/create` | Create a new category |
| GET    | `/api/v1/category`        | Get all categories    |
| GET    | `/api/v1/category/:id`    | Get category by ID    |
| PUT    | `/api/v1/category/:id`    | Update category       |
| DELETE | `/api/v1/category/:id`    | Delete category       |

### Sub-Categories

| Method | Endpoint                                     | Description                         |
| ------ | -------------------------------------------- | ----------------------------------- |
| POST   | `/api/v1/category/:categoryId/subcategory`   | Create subcategory under a category |
| GET    | `/api/v1/category/subcategories`             | Get all subcategories               |
| GET    | `/api/v1/category/:categoryId/subcategories` | Get subcategories by category ID    |
| GET    | `/api/v1/category/subcategory/:id`           | Get subcategory by ID               |
| PUT    | `/api/v1/category/subcategory/:id`           | Update subcategory                  |
| DELETE | `/api/v1/category/subcategory/:id`           | Delete subcategory                  |

### Items

| Method | Endpoint                            | Description           |
| ------ | ----------------------------------- | --------------------- |
| POST   | `/api/v1/category/item/create`      | Create new menu item  |
| GET    | `/api/v1/category/item`             | Get all items         |
| GET    | `/api/v1/category/item/:categoryId` | Get items by category |
| GET    | `/api/v1/category/item/search`      | Search items by name  |
| GET    | `/api/v1/category/item/:id`         | Get item by ID        |
| PUT    | `/api/v1/category/item/:id`         | Update item           |
| DELETE | `/api/v1/category/item/:id`         | Delete item           |

## Request Body Examples

### User Registration

```json
{
  "username": "vaibhav",
  "email": "vaibhav@admin.com",
  "password": "abc0900"
}
```

### Category Creation

```json
{
  "name": "Item Name",
  "subCategory": "subcategoryId",
  "baseAmount": 80,
  "totalAmount": 100
}
```

### Item Creation

```json
{
  "name": "Item Name",
  "subCategory": "subcategoryId",
  "baseAmount": 80,
  "totalAmount": 100
}
```

## Features

✨ **User Authentication & Authorization**

- Secure signup and signin functionality
- JWT token-based authentication
- Password encryption using bcrypt

🔄 **Complete CRUD Operations**

- Create, Read, Update and Delete operations for:
  - Categories
  - Sub-categories
  - Menu Items

📑 **Hierarchical Menu Structure**

- Categories contain sub-categories
- Sub-categories contain menu items
- Clean and organized menu management
- Followed MVC architecture, ensuring modularity and scalability of the application

🔍 **Search Functionality**

- Search menu items by name
- Filter items by category/sub-category

💰 **Price Management**

- Base amount tracking
- Total amount calculation
- Flexible pricing system

## Tech Stack

🚀 **Backend**

- Node.js
- Express.js
- MongoDB

🔐 **Security**

- JWT Authentication
- Bcrypt Password Encryption
- Secure API Endpoints
