# POST /jobs

Purpose:

Create a new job entry.

Request:

{
  "title": "Frontend Intern",
  "company": "Google",
  "location": "Remote"
}

Response:

{
  "message": "Job Created",
  "job_id": "..."
}

# POST /jobs

Purpose:

Create a new job entry in the CareerOS database.

Flow:

Request
 ↓
Schema Validation
 ↓
Route
 ↓
Service
 ↓
MongoDB

Request:

{
  "title": "Frontend Intern",
  "company": "Google",
  "location": "Remote"
}

Response:

{
  "message": "Job Created",
  "job_id": "..."
}

## Why use a Service Layer?

Instead of allowing routes to directly interact with the database, business logic is separated into service modules.

Benefits:

- Cleaner architecture
- Better maintainability
- Easier testing
- Improved scalability