# Jobs Collection

## Purpose

Stores job opportunities collected from external platforms and user actions.

---

## Document Structure

```json
{
  "_id": "...",

  "title": "Software Engineer Intern",

  "company": "Google",

  "location": "Bangalore",

  "job_url": "https://linkedin.com/job/...",

  "source": "LinkedIn",

  "status": "SCRAPED",

  "created_at": "2026-06-21T10:00:00"
}
```

---

## Status Lifecycle

```text
SCRAPED
   ↓
APPLIED
   ↓
INTERVIEW
   ↓
OFFER
```

Alternative States:

```text
REJECTED
ARCHIVED
WITHDRAWN
```
