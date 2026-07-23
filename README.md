# 🚀 ApplyPilot

### AI-Powered Job Tracking & Career Intelligence Platform

ApplyPilot is a full-stack web application that helps students and job seekers organize their job applications in one place.

Instead of managing spreadsheets and multiple job portals, ApplyPilot provides a centralized dashboard to save jobs, track application progress, analyze opportunities, and (in future versions) receive AI-powered career insights.

---

# ✨ Current Features

## Backend

- FastAPI REST API
- MongoDB Integration
- Repository Pattern
- Service Layer Architecture
- CRUD Job Management
- Environment-based Configuration
- Automatic API Documentation (Swagger)

Current Endpoints

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

## Frontend

- React + TypeScript
- Vite
- Tailwind CSS v4
- Responsive Dashboard
- Sidebar Navigation
- Dashboard Overview
- Jobs Page
- Analytics Page
- Settings Page

---

## Dashboard Features

- Dashboard Statistics Cards
- Recent Applications
- Analytics Charts
- Search Bar
- Placement Progress
- Responsive Layout

---

# 🚧 Features In Progress

- Kanban Job Board
- Drag & Drop Workflow
- Search & Filtering
- Dashboard Statistics API

---

# 🔮 Planned Features

## AI Features

- Resume Matching
- ATS Score
- Skill Gap Detection
- Resume Optimization
- AI Career Recommendations

---

## Browser Extension

- LinkedIn Job Capture
- Naukri Job Capture
- Company Career Pages
- One-click Job Saving

---

## Authentication

- JWT Authentication
- User Accounts
- Protected Routes

---

# 🛠 Tech Stack

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
- Motor
- MongoDB
- Pydantic

---

## Database

- MongoDB Community Edition
- MongoDB Compass

---

## Future

- Playwright
- BeautifulSoup
- OpenAI / Gemini
- JWT
- Docker

---

# 🏗 Architecture

```text
                     React Dashboard
                            │
                            ▼
                      FastAPI Backend
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
   Route Layer        Service Layer      Repository Layer
                                                │
                                                ▼
                                             MongoDB
```

Future

```text
Chrome Extension
        │
        ▼
FastAPI Backend
        │
        ▼
AI Resume Engine
        │
        ▼
React Dashboard
```

---

# 📁 Project Structure

```text
ApplyPilot
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── core
│   │   ├── db
│   │   ├── models
│   │   ├── repositories
│   │   ├── schemas
│   │   ├── services
│   │   ├── scrapers
│   │   └── main.py
│   │
│   └── tests
│
├── frontend
│   └── src
│
├── docs
│
└── README.md
```

---

# 🚀 Getting Started

Clone the repository

```bash
git clone <repo-url>
```

Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

python -m pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

Frontend

```bash
cd frontend

npm install

npm run dev
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# 📌 Project Roadmap

## v0.1.0

- Project Setup

## v0.2.0

- Backend
- MongoDB
- FastAPI

## v0.3.0

- Repository Pattern
- Service Layer
- CRUD Job APIs

## v0.4.x

- Dashboard
- Analytics
- Responsive UI

## v0.5.0

- Kanban Board
- Search
- Filters

## v0.6.0

- Browser Extension

## v0.7.0

- AI Resume Matching

---

# 🎯 Vision

ApplyPilot aims to become a personal career companion that helps students manage applications, monitor progress, and eventually receive AI-powered guidance throughout their placement journey.

The long-term goal is to automate repetitive tasks while providing actionable career insights through analytics and artificial intelligence.

---

# 👩‍💻 Author

**Stuti Katiyar**

Built to simplify the internship and job application journey for students.

---

## ⭐ If you like this project

Consider giving the repository a star!