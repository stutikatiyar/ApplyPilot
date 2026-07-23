# Architecture Documentation

# ApplyPilot Architecture

**Version:** 0.3.0

---

# 1. System Overview

ApplyPilot is an AI-powered Job Discovery and Application Tracking Platform designed to simplify the internship and job application process.

The platform enables users to:

- Discover opportunities
- Organize applications
- Track application progress
- Analyze application statistics
- Receive AI-powered career insights (Upcoming)

The project follows a layered backend architecture that separates API handling, business logic, and database operations for better maintainability and scalability.

---

# 2. System Architecture

```text
                     ┌──────────────────────────┐
                     │     React Dashboard      │
                     └─────────────┬────────────┘
                                   │
                              REST API
                                   │
                                   ▼
                    ┌──────────────────────────┐
                    │     FastAPI Backend      │
                    └─────────────┬────────────┘
                                  │
      ┌───────────────────────────┼───────────────────────────┐
      ▼                           ▼                           ▼
┌──────────────┐          ┌──────────────┐          ┌────────────────┐
│ Route Layer  │ ───────► │ Service Layer│ ───────► │ Repository     │
└──────────────┘          └──────────────┘          └───────┬────────┘
                                                            │
                                                            ▼
                                                   ┌────────────────┐
                                                   │    MongoDB     │
                                                   └────────────────┘

                     Future Components
         Chrome Extension • AI Engine • Authentication
```

---

# 3. Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Icons

---

## Backend

- FastAPI
- Motor (Async MongoDB Driver)
- Pydantic
- Python

---

## Database

- MongoDB Community Edition
- MongoDB Compass

---

## Future Technologies

- Playwright
- BeautifulSoup
- OpenAI
- JWT Authentication
- Docker

---

# 4. Backend Architecture

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

Each layer has a single responsibility.

---

## Route Layer

Responsible for:

- Receiving HTTP requests
- Schema validation
- Calling business services
- Returning HTTP responses

Current Routes

```
POST   /jobs
GET    /jobs
GET    /jobs/{id}
PUT    /jobs/{id}
DELETE /jobs/{id}
```

---

## Service Layer

Responsible for:

- Business logic
- Data processing
- Validation
- Future AI integration

Current Services

- Job Service

Future Services

- AI Matching Service
- Resume Service
- Analytics Service
- Authentication Service

---

## Repository Layer

Responsible for:

- MongoDB CRUD operations
- ObjectId conversion
- Database abstraction

Current Repository

- Job Repository

---

## Database Layer

Responsible for:

- Persistent storage
- Collections
- Query execution

Current Collection

```
jobs
```

Future Collections

```
users
resumes
analytics
notifications
```

---

# 5. Project Structure

```text
ApplyPilot
│
├── backend
│   │
│   ├── app
│   │   ├── ai
│   │   ├── api
│   │   │   └── routes
│   │   ├── core
│   │   ├── db
│   │   ├── models
│   │   ├── repositories
│   │   ├── schemas
│   │   ├── scrapers
│   │   ├── services
│   │   ├── utils
│   │   └── main.py
│   │
│   └── tests
│
├── frontend
│   │
│   └── src
│       ├── components
│       ├── context
│       ├── hooks
│       ├── layouts
│       ├── pages
│       ├── routes
│       ├── services
│       ├── themes
│       ├── types
│       └── utils
│
└── docs
```

---

# 6. Request Flow

Every API request follows this flow.

```text
Client
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

# 7. Job Lifecycle

Each job progresses through different application stages.

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

# 8. Current Features

Implemented

- FastAPI Backend
- MongoDB Integration
- Environment Configuration
- Repository Pattern
- Service Layer
- CRUD Job API
- Schema Validation
- Dashboard Foundation
- Analytics Dashboard
- Responsive UI

---

# 9. Planned Features

The following modules are part of the project roadmap.

### AI Engine

- Resume Matching
- Skill Gap Detection
- ATS Score
- Resume Optimization

### Browser Extension

- LinkedIn Job Capture
- Company Career Pages
- One-click Save

### Authentication

- JWT Authentication
- User Profiles
- Protected APIs

### Analytics

- Weekly Reports
- Application Trends
- Offer Rate
- Interview Success Rate

### Resume Module

- Resume Upload
- Resume Parser
- Resume History

---

# 10. Security Considerations

Backend

- Request validation
- Environment variables
- Proper HTTP status codes
- Layered architecture

Database

- MongoDB ObjectId
- Collection isolation
- Input validation

Future

- JWT Authentication
- Password Hashing
- HTTPS
- Rate Limiting
- Role-Based Access Control (RBAC)

---

# 11. Scalability

Current

```text
Single User
```

Future

```text
Multi User
Authentication
Cloud Deployment
Resume Storage
Notification System
AI Recommendation Engine
Distributed Scrapers
```

---

# 12. Version History

| Version | Description |
|----------|-------------|
| v0.1.0 | Project Foundation |
| v0.2.0 | Backend & MongoDB Integration |
| v0.3.0 | Repository Pattern, Service Layer & CRUD Job API |
| v0.4.0 | Frontend Dashboard Foundation |
| v0.4.x | Dashboard UI & Analytics Enhancements |

---

# 13. Architecture Principles

ApplyPilot follows modern backend design principles:

- Separation of Concerns
- Layered Architecture
- Repository Pattern
- Service-Oriented Design
- Async Programming
- RESTful API Design
- Modular Folder Structure

These principles make the project easier to maintain, test, and extend as new features are added.