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

# GET /jobs

## Purpose

Retrieve all jobs stored in the CareerOS database.

---

## Endpoint

```http
GET /jobs
```

---

## Request Body

No request body required.

---

## Response

```json
[
  {
    "_id": "6856abc123...",
    "title": "Frontend Intern",
    "company": "Google",
    "location": "Remote",
    "job_url": "https://example.com",
    "source": "LinkedIn",
    "status": "SCRAPED"
  }
]
```

---

## Flow

```text
Client
   ↓
GET /jobs
   ↓
FastAPI Route
   ↓
Job Service
   ↓
MongoDB
   ↓
JSON Response
```

---

## Concepts Learned

### find()

Retrieves multiple documents from a MongoDB collection.

Equivalent SQL:

```sql
SELECT * FROM jobs;
```

---

### ObjectId

MongoDB automatically creates an `_id` field for every document.

Example:

```text
6856abc123...
```

Since ObjectId is not JSON serializable, it must be converted to a string before returning it to the frontend.

```
```
