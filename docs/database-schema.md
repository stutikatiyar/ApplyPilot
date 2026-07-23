# Database Schema

## Database

```
applypilot
```

---

# Collection: jobs

## Purpose

Stores job opportunities collected from external job platforms and user-tracked applications.

Each document represents a single job application managed by ApplyPilot.

---

# Document Structure

```json
{
  "_id": "6856abc123...",

  "title": "Software Engineer Intern",

  "company": "Google",

  "company_logo": "https://logo.clearbit.com/google.com",

  "description": "Frontend internship working on React applications.",

  "location": "Bengaluru",

  "work_mode": "Hybrid",

  "salary": "₹50,000/month",

  "experience": "0-1 Years",

  "skills": [
    "React",
    "TypeScript",
    "Git"
  ],

  "source": "LinkedIn",

  "apply_url": "https://careers.google.com/jobs/123",

  "posted_date": "2026-07-15",

  "ai_match_score": 87.5,

  "application_status": "Wishlist",

  "notes": "Looks like a good fit.",

  "created_at": "2026-07-22T12:00:00",

  "updated_at": "2026-07-22T12:00:00"
}
```

---

# Field Descriptions

| Field | Type | Description |
|--------|------|-------------|
| `_id` | ObjectId | MongoDB generated unique identifier |
| `title` | String | Job title |
| `company` | String | Company name |
| `company_logo` | String | Company logo URL |
| `description` | String | Complete job description |
| `location` | String | Job location |
| `work_mode` | String | Remote, Hybrid, or On-site |
| `salary` | String | Salary or stipend (optional) |
| `experience` | String | Required experience |
| `skills` | Array | Required skills |
| `source` | String | Source platform (LinkedIn, Careers Page, etc.) |
| `apply_url` | String | Official application link |
| `posted_date` | String | Original job posting date |
| `ai_match_score` | Float | Resume-job compatibility score |
| `application_status` | Enum | Current application stage |
| `notes` | String | User notes |
| `created_at` | DateTime | Record creation timestamp |
| `updated_at` | DateTime | Last update timestamp |

---

# Application Status Lifecycle

```text
Wishlist
     │
     ▼
Applied
     │
     ▼
Online Assessment
     │
     ▼
Interview
     │
     ▼
Offer
```

Alternative Outcome

```text
Wishlist
     │
     ▼
Rejected
```

---

# Collection Design

- One document represents one job application.
- Each document stores both scraped information and user-specific tracking data.
- MongoDB automatically generates a unique `_id` for every document.
- Timestamps are maintained to track record creation and updates.

---

# Future Enhancements

The following fields are planned for future releases:

```json
{
  "resume_id": "...",
  "cover_letter": "...",
  "deadline": "...",
  "favorite": true,
  "tags": ["Internship", "Remote"],
  "company_rating": 4.6,
  "last_checked": "2026-07-25T09:30:00"
}
```