# Backend Initialization Documentation

## Purpose

The backend is the central processing unit of CareerOS.

It acts as the bridge between:

```text
Chrome Extension
       ↓
FastAPI Backend
       ↓
MongoDB Database
       ↓
React Dashboard
```

The backend is responsible for:

* Receiving job data
* Validating requests
* Communicating with MongoDB
* Performing analytics
* Running AI workflows
* Providing APIs to the frontend

---

# Why FastAPI?

FastAPI was selected because:

### High Performance

FastAPI is one of the fastest Python web frameworks and is built on:

* Starlette
* Pydantic

It supports asynchronous operations which are useful when:

* Reading job descriptions
* Calling AI APIs
* Querying MongoDB

---

### Automatic Documentation

FastAPI automatically generates API documentation.

Swagger UI:

```text
http://localhost:8000/docs
```

Redoc:

```text
http://localhost:8000/redoc
```

This significantly improves developer productivity.

---

# Backend Folder Structure

```text
backend/
│
├── app/
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
│   ├── schemas/
│   │   └── job.py
│   │
│   ├── services/
│   │   └── job_service.py
│   │
│   ├── utils/
│   │
│   └── main.py
│
├── requirements.txt
└── .env
```

---

# Folder Responsibilities

## app/main.py

Entry point of the backend.

Responsibilities:

* Create FastAPI application
* Register routes
* Configure middleware
* Start backend services

Example:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "CareerOS Backend Running"}
```

---

## api/routes

Purpose:

Expose API endpoints.

Examples:

```text
/jobs
/analytics
/ai
/auth
```

Example:

```python
@router.get("/jobs")
```

Routes should only handle:

* Request
* Response

Business logic should not be written here.

---

## services

Purpose:

Contains business logic.

Example:

```text
Save Job
Calculate Match Score
Generate Analytics
```

Think:

```text
Routes → Services → Database
```

not

```text
Routes → Database
```

This separation improves maintainability.

---

## schemas

Purpose:

Validate incoming and outgoing data.

Uses:

* Pydantic

Example:

```python
class JobCreate(BaseModel):
    title: str
    company: str
    url: str
```

Benefits:

* Type Safety
* Validation
* Cleaner APIs

---

## models

Purpose:

Represent database entities.

Example:

```python
Job
User
Analytics
```

Models define how information is stored internally.

---

## db

Purpose:

Database connections.

Example:

```python
MongoDB Client
```

Responsibilities:

* Connect to MongoDB
* Reuse connections
* Manage database configuration

---

## core

Purpose:

Application configuration.

Examples:

```text
Environment Variables
Settings
Constants
Security Configurations
```

This prevents hardcoding values.

Bad:

```python
DATABASE_URL = "mongodb://localhost"
```

Good:

```python
DATABASE_URL = os.getenv("DATABASE_URL")
```

---

## utils

Purpose:

Reusable helper functions.

Examples:

```text
Date Formatting
Text Cleaning
Skill Extraction Helpers
```

Utility code should not contain business logic.

---

# Virtual Environment

## Why?

A virtual environment isolates project dependencies.

Without venv:

```text
All projects share packages
```

With venv:

```text
CareerOS has its own packages
```

Benefits:

* No dependency conflicts
* Reproducibility
* Easier deployment

---

# Requirements File

Purpose:

Store all installed dependencies.

Generated using:

```bash
pip freeze > requirements.txt
```

Reinstall dependencies:

```bash
pip install -r requirements.txt
```

This allows anyone to recreate the environment.

---

# First Backend Endpoint

Current Endpoint:

```python
@app.get("/")
```

Purpose:

Health Check Endpoint

Response:

```json
{
  "message": "CareerOS Backend Running"
}
```

Why it exists:

Before building APIs, we first verify:

* FastAPI is installed
* Server starts correctly
* Requests can be processed

---

# Backend Development Roadmap

Phase 1

```text
Backend Initialization
        ↓
MongoDB Connection
        ↓
Job Schema
        ↓
Save Job API
        ↓
Get Jobs API
```

Phase 2

```text
Kanban APIs
Analytics APIs
```

Phase 3

```text
Resume Matching
Skill Gap Analysis
AI Scoring Engine
```

---

# Key Design Principle

CareerOS follows:

```text
Route
 ↓
Service
 ↓
Database
```

instead of:

```text
Route
 ↓
Database
```

This architecture keeps the project scalable, maintainable, and suitable for production-level development.

## Health Check Endpoint

Purpose:

Verify that the FastAPI application is running correctly.

Endpoint:

GET /

Response:

{
  "message": "CareerOS Backend Running 🚀"
}

# Request Lifecycle

When a user visits:

```text
http://127.0.0.1:8000/
```

the following sequence occurs:

```text
Browser
   ↓
FastAPI Server
   ↓
Route Matching
   ↓
Python Function Execution
   ↓
JSON Response
   ↓
Browser
```

Detailed Flow:

1. Browser sends an HTTP GET request.
2. FastAPI receives the request.
3. FastAPI checks registered routes.
4. Route "/" is matched.
5. Function `root()` executes.
6. Python dictionary is returned.
7. FastAPI converts dictionary into JSON.
8. Browser displays the response.

This process forms the foundation of all future API interactions.


# Concepts Learned

## FastAPI

A modern Python framework used to build APIs.

Role in CareerOS:

```text
Chrome Extension
        ↓
FastAPI
        ↓
MongoDB
        ↓
React Dashboard
```

FastAPI acts as the communication layer between all components.

---

## Route

A route maps a URL to a Python function.

Example:

```python
@app.get("/")
```

Meaning:

```text
URL
 ↓
Function
```

---

## Endpoint

An endpoint is a URL exposed by the backend.

Examples:

```text
/
/jobs
/analytics
```

---

## Health Check Endpoint

A lightweight endpoint used to verify that the server is operational.

Purpose:

* Verify backend startup
* Verify request processing
* Verify API availability
# Interview Questions

## Q1. Why did you choose FastAPI?

Answer:

* High performance
* Automatic API documentation
* Built-in validation using Pydantic
* Async support
* Cleaner architecture compared to traditional frameworks

---

## Q2. What is a Route?

A route maps a URL path to a backend function.

Example:

```python
@app.get("/")
```

---

## Q3. What is an Endpoint?

An endpoint is the URL exposed by the backend application.

Example:

```text
http://localhost:8000/jobs
```

---

## Q4. What is a Health Check Endpoint?

A health check endpoint is used to determine whether the server is running correctly.

Example:

```text
GET /
```

Response:

```json
{
  "message": "CareerOS Backend Running"
}
```
