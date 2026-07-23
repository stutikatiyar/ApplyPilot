# Backend Documentation

# ApplyPilot Backend

**Version:** 0.3.0

---

# Purpose

The backend is the core of ApplyPilot.

It acts as the communication layer between the frontend and the database while implementing the application's business logic.

```text
React Dashboard
        │
        ▼
FastAPI Backend
        │
        ▼
MongoDB Database
```

Future Architecture

```text
Chrome Extension
        │
        ▼
FastAPI Backend
        │
        ▼
MongoDB Database
        │
        ▼
React Dashboard
```

---

# Backend Responsibilities

The backend is responsible for:

- Receiving HTTP requests
- Validating request data
- Managing business logic
- Performing CRUD operations
- Communicating with MongoDB
- Returning JSON responses
- Providing REST APIs
- Supporting future AI workflows

---

# Why FastAPI?

ApplyPilot uses FastAPI because it provides modern API development features with excellent performance.

## High Performance

FastAPI is built on:

- Starlette
- Pydantic

Benefits:

- Asynchronous request handling
- High throughput
- Low latency
- Excellent scalability

This makes it ideal for:

- Database operations
- AI inference
- Job scraping
- Resume analysis

---

## Automatic API Documentation

FastAPI automatically generates interactive API documentation.

Swagger UI

```text
http://127.0.0.1:8000/docs
```

ReDoc

```text
http://127.0.0.1:8000/redoc
```

This allows developers to test endpoints without using external tools.

---

# Backend Folder Structure

```text
backend/
│
├── app/
│   │
│   ├── ai/
│   │
│   ├── api/
│   │   └── routes/
│   │       └── jobs.py
│   │
│   ├── core/
│   │   └── config.py
│   │
│   ├── db/
│   │   └── mongodb.py
│   │
│   ├── models/
│   │   └── job.py
│   │
│   ├── repositories/
│   │   └── job_repository.py
│   │
│   ├── schemas/
│   │   └── job.py
│   │
│   ├── scrapers/
│   │
│   ├── services/
│   │   └── job_service.py
│   │
│   ├── utils/
│   │
│   └── main.py
│
├── tests/
│
├── requirements.txt
│
└── .env
```

---

# Layered Architecture

The backend follows a layered architecture.

```text
Client
   │
   ▼
Routes
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
MongoDB
```

Each layer has one responsibility.

---

# Folder Responsibilities

## main.py

Entry point of the backend.

Responsibilities

- Create FastAPI application
- Register API routes
- Initialize application
- Configure middleware (future)

---

## api/routes

Responsible for HTTP endpoints.

Current Endpoints

```
POST   /jobs
GET    /jobs
GET    /jobs/{id}
PUT    /jobs/{id}
DELETE /jobs/{id}
```

Responsibilities

- Receive requests
- Validate input
- Call services
- Return responses

Business logic should never be written here.

---

## services

Contains the application's business logic.

Current Service

```
JobService
```

Future Services

- Resume Service
- AI Matching Service
- Analytics Service
- Authentication Service

Responsibilities

- Business rules
- AI processing
- Data validation
- Duplicate detection

---

## repositories

Responsible for database access.

Current Repository

```
JobRepository
```

Responsibilities

- MongoDB CRUD operations
- ObjectId conversion
- Query execution
- Database abstraction

Routes never communicate directly with MongoDB.

---

## schemas

Uses Pydantic models for request and response validation.

Current Schemas

```
JobCreate
JobUpdate
JobResponse
ApplicationStatus
```

Benefits

- Input validation
- Type safety
- Better API documentation
- Cleaner code

---

## models

Represents database entities.

Current Model

```
Job
```

Models define how information is stored internally.

---

## db

Responsible for MongoDB connectivity.

Current Files

```
mongodb.py
```

Responsibilities

- Database connection
- Client reuse
- Database configuration

---

## core

Application configuration.

Contains

- Environment variables
- Application settings
- Constants

Example

Instead of

```python
DATABASE_URL = "mongodb://localhost"
```

Use

```python
DATABASE_URL = os.getenv("DATABASE_URL")
```

This avoids hardcoding configuration values.

---

## scrapers

Reserved for future job scraping modules.

Planned

- LinkedIn Scraper
- Company Career Scrapers
- Registry
- Utilities

---

## ai

Reserved for future AI features.

Planned

- Resume Matching
- ATS Score
- Skill Gap Detection
- Recommendation Engine

---

## utils

Contains reusable helper functions.

Examples

- Date formatting
- Text cleaning
- String utilities
- Common helpers

Utility modules should not contain business logic.

---

# Virtual Environment

A virtual environment isolates project dependencies.

Without a virtual environment

```text
All projects share packages.
```

With a virtual environment

```text
Each project has its own dependencies.
```

Benefits

- No dependency conflicts
- Easier deployment
- Better reproducibility

---

# Requirements File

Stores all project dependencies.

Generate

```bash
pip freeze > requirements.txt
```

Install

```bash
python -m pip install -r requirements.txt
```

---

# Health Check Endpoint

Purpose

Verify that the backend is running.

Endpoint

```http
GET /
```

Response

```json
{
  "message": "ApplyPilot Backend Running 🚀"
}
```

---

# Database Test Endpoint

Purpose

Verify MongoDB connectivity.

Endpoint

```http
GET /db-test
```

Example Response

```json
{
  "database": "applypilot"
}
```

---

# Request Lifecycle

Every request follows this flow.

```text
Browser / Frontend
        │
        ▼
HTTP Request
        │
        ▼
FastAPI Route
        │
        ▼
Schema Validation
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
MongoDB
        │
        ▼
JSON Response
```

---

# Current Backend APIs

```
GET    /
GET    /db-test

POST   /jobs
GET    /jobs
GET    /jobs/{id}
PUT    /jobs/{id}
DELETE /jobs/{id}
```

---

# Development Roadmap

## Phase 1 ✅

- FastAPI Setup
- MongoDB Integration
- Environment Configuration
- CRUD Job APIs
- Repository Pattern
- Service Layer

---

## Phase 2

- Kanban APIs
- Dashboard Statistics
- Search & Filtering
- Pagination

---

## Phase 3

- Resume Upload
- AI Matching
- Skill Gap Detection
- ATS Score
- Recommendation Engine

---

# Key Design Principles

ApplyPilot follows modern backend principles.

```text
Client
   │
   ▼
Route
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
MongoDB
```

Instead of

```text
Route
   │
   ▼
MongoDB
```

Benefits

- Separation of concerns
- Better maintainability
- Easier testing
- Scalability
- Cleaner codebase

---

# Concepts Learned

- FastAPI
- REST APIs
- Routes
- Endpoints
- Pydantic
- Environment Variables
- MongoDB
- Motor
- Repository Pattern
- Service Layer
- CRUD Operations
- Async Programming

---

# Interview Questions

## Why FastAPI?

- High performance
- Automatic API documentation
- Async support
- Pydantic validation
- Clean architecture

---

## What is a Route?

A route maps an HTTP request to a Python function.

Example

```python
@router.get("/jobs")
```

---

## What is an Endpoint?

An endpoint is a URL exposed by the backend.

Examples

```
GET /jobs
POST /jobs
```

---

## What is the Repository Pattern?

The Repository Pattern isolates all database operations into a dedicated layer.

Benefits

- Cleaner architecture
- Easier testing
- Database abstraction

---

## Why use a Service Layer?

The Service Layer contains business logic instead of placing it inside routes.

Benefits

- Better maintainability
- Cleaner code
- Reusable business logic
- Easier feature expansion

---

## Why use Pydantic Schemas?

Pydantic validates incoming request data before it reaches the business logic.

Benefits

- Type safety
- Automatic validation
- Cleaner APIs
- Better Swagger documentation