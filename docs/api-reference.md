# API Reference

This document describes the REST API exposed by the ApplyPilot backend.

---

# Base URL

```
http://localhost:8000
```

---

# Architecture Flow

Every request follows the same flow:

```text
Client
   │
   ▼
FastAPI Route
   │
   ▼
Service Layer
   │
   ▼
Repository Layer
   │
   ▼
MongoDB
```

This layered architecture separates:

- **Routes** → Handle HTTP requests and responses
- **Services** → Business logic
- **Repositories** → Database operations
- **MongoDB** → Data storage

---

# POST /jobs

## Purpose

Create a new job entry.

## Endpoint

```http
POST /jobs
```

## Request Body

```json
{
  "title": "Frontend Intern",
  "company": "Google",
  "description": "Frontend internship role",
  "location": "Remote",
  "work_mode": "Remote",
  "salary": "₹50,000/month",
  "experience": "0-1 Years",
  "skills": [
    "React",
    "TypeScript"
  ],
  "source": "LinkedIn",
  "apply_url": "https://careers.google.com"
}
```

## Success Response

```json
{
  "message": "Job created successfully",
  "job_id": "6856abc123..."
}
```

## Status Code

```
201 Created
```

---

# GET /jobs

## Purpose

Retrieve all stored jobs.

## Endpoint

```http
GET /jobs
```

## Success Response

```json
[
  {
    "id": "6856abc123...",
    "title": "Frontend Intern",
    "company": "Google",
    "location": "Remote",
    "work_mode": "Remote",
    "source": "LinkedIn",
    "application_status": "Wishlist"
  }
]
```

## Status Code

```
200 OK
```

---

# GET /jobs/{job_id}

## Purpose

Retrieve a single job.

## Endpoint

```http
GET /jobs/{job_id}
```

## Success Response

```json
{
  "id": "6856abc123...",
  "title": "Frontend Intern",
  "company": "Google",
  "location": "Remote"
}
```

## Error Response

```json
{
  "detail": "Job not found"
}
```

## Status Codes

```
200 OK
404 Not Found
```

---

# PUT /jobs/{job_id}

## Purpose

Update an existing job.

## Endpoint

```http
PUT /jobs/{job_id}
```

## Example Request

```json
{
  "application_status": "Applied",
  "notes": "Applied through referral"
}
```

## Success Response

```json
{
  "message": "Job updated successfully"
}
```

## Status Codes

```
200 OK
404 Not Found
```

---

# DELETE /jobs/{job_id}

## Purpose

Delete a job.

## Endpoint

```http
DELETE /jobs/{job_id}
```

## Success Response

```json
{
  "message": "Job deleted successfully"
}
```

## Status Codes

```
200 OK
404 Not Found
```

---

# Concepts Learned

## REST APIs

- GET → Read data
- POST → Create data
- PUT → Update data
- DELETE → Remove data

---

## Repository Pattern

All database interactions are isolated inside repository classes.

Benefits:

- Cleaner code
- Better maintainability
- Easier testing
- Database abstraction

---

## Service Layer

Business logic is separated from API routes.

Examples:

- AI Resume Matching
- Duplicate Detection
- Resume Parsing
- Skill Extraction

---

## MongoDB Collections

Jobs are stored inside the `jobs` collection.

Each document represents one job application.

---

## ObjectId

MongoDB automatically generates a unique `_id` for every document.

Before returning data to the frontend, `_id` is converted into a string `id` because `ObjectId` is not JSON serializable.

---

## Async Programming

The backend uses asynchronous functions (`async/await`) together with Motor, allowing efficient handling of concurrent database requests without blocking the server.