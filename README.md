# Inventory Backend - Node.js & PostgreSQL

[![Node.js](https://img.shields.io/badge/Node.js-20-brightgreen)](https://nodejs.org/)  
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)](https://www.postgresql.org/)  
[![Docker](https://img.shields.io/badge/Docker-Desktop-blue)](https://www.docker.com/)  
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Database](#database)
- [Docker Setup](#docker-setup)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
**Inventory Backend** is a RESTful API built with Node.js and PostgreSQL for managing inventory items in a warehouse or store.  
It supports CRUD operations, low-stock alerts, and integrates easily with front-end applications or other services.

---

## Features
- Add, update, delete, and retrieve inventory items  
- Unique SKU validation  
- Low stock threshold alerts  
- Automated timestamps for creation and updates  
- Error handling and logging middleware  
- Swagger documentation included  
- Fully dockerized for development and production  

---

## Tech Stack
- **Node.js** (v20)  
- **Express.js**  
- **PostgreSQL** (v15)  
- **Docker & Docker Compose**  
- **Nodemon** (development)  
- **dotenv** for environment management  
- **Jest** for testing  

---

## Folder Structure
E:.
│ .env
│ .env.example
│ docker-compose.yml
│ Dockerfile
│ package.json
│ README.md
│ swagger.yaml
│
├───scripts
│ seed.js # Seed initial data
│
├───src
│ ├───config
│ │ db.js # Database connection
│ │ env.js
│ │ index.js
│ ├───middlewares
│ │ auth.middleware.js
│ │ error.middleware.js
│ │ logger.middleware.js
│ ├───modules
│ │ └───inventory
│ │ inventory.controller.js
│ │ inventory.model.js
│ │ inventory.repository.js
│ │ inventory.routes.js
│ │ inventory.service.js
│ │ inventory.validation.js
│ └───utils
│ ApiError.js
│ ApiResponse.js
│ logger.js
└───tests
inventory.test.js

## yml

---

## Getting Started

### Prerequisites
- Node.js v20+  
- PostgreSQL v15+ (if running locally)  
- Docker & Docker Compose (optional but recommended)  
- Git  

---

### Installation (Local)
1. Clone the repository:  
```bash
git clone https://github.com/Utsab96/inventory-backend-nodejs.git
cd inventory-backend-nodejs

cd inventory-backend-nodejs
Install dependencies:

bash
Copy code
npm install
Copy .env.example to .env and configure your environment variables:

bash
Copy code
cp .env.example .env
Start the server:

bash
Copy code
npm run dev
Server runs on http://localhost:5000.

Environment Variables
env
Copy code
DB_HOST=localhost       # Use `db` if running in Docker
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=#abcd123
DB_NAME=inventory_db
PORT=5000
API Documentation
Base URL: http://localhost:5000/api/v1/inventory

Method	Endpoint	Description
GET	/	Fetch all inventory items
GET	/:id	Fetch a single item by ID
POST	/	Create a new inventory item
PUT	/:id	Update an inventory item
DELETE	/:id	Delete an inventory item

Full Swagger documentation is available in swagger.yaml.

Database
Table: inventory

sql
Copy code
CREATE TABLE IF NOT EXISTS public.inventory (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product_name VARCHAR(255) NOT NULL,
    sku VARCHAR(100) UNIQUE NOT NULL,
    quantity INTEGER DEFAULT 0,
    price NUMERIC(10,2),
    low_stock_threshold INTEGER DEFAULT 10,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
The database is automatically created in Docker.

Seed data can be added using scripts/seed.js.

Docker Setup
Build and start containers:

bash
Copy code
docker-compose up --build
Services:

Backend: http://localhost:5000

PostgreSQL: port 5432

Use DB_HOST=db in .env when running in Docker.

Stop and remove containers:

bash
Copy code
docker-compose down -v
Testing
Run tests using Jest:

bash
Copy code
npm run test
Contributing
Fork the repository

Create your feature branch: git checkout -b feature-name

Commit your changes: git commit -m "Description of changes"

Push to the branch: git push origin feature-name

Open a Pull Request

License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
Utsab Ghosh

GitHub: @Utsab96

LinkedIn: linkedin.com/in/utsab96

Email: utsab.ghosh96@gmail.com

yaml
Copy code

---

This README is **professional, complete, and structured** for GitHub. It includes:  
- Project overview & badges  
- Features & tech stack  
- Folder structure  
- Local & Docker setup  
- Database info & table schema  
- API endpoints  
- Testing instructions  
- Contributing guide  
- License & author info  

---
