# Changelog

---

# v0.1.0 - Project Foundation

## Added

- Project repository initialization
- React + TypeScript + Vite setup
- Frontend dependency installation
- Backend folder structure
- Documentation structure
- Initial README
- Project architecture

## Documentation

- README.md
- setup-guide.md
- architecture.md

---

# v0.2.0 - Backend & Database Foundation

## Added

- FastAPI application initialization
- Health check endpoint (`GET /`)
- Environment configuration using `.env`
- MongoDB Community Server setup
- MongoDB Compass setup
- MongoDB connection layer (Motor)
- Database connection test endpoint (`GET /db-test`)

## Documentation

- backend-setup.md
- database-schema.md

## Concepts Learned

- FastAPI
- API Endpoints
- Environment Variables
- MongoDB
- Motor (Async MongoDB Driver)
- Async Programming

---

# v0.3.0 - Job Management API

## Added

### Backend Architecture

- Repository Pattern
- Service Layer
- API Route Layer
- Request/Response Schema Layer
- MongoDB Collection Integration

### Job Management

- Job schema validation
- Job creation endpoint (`POST /jobs`)
- Fetch all jobs (`GET /jobs`)
- Fetch job by ID (`GET /jobs/{id}`)
- Update job (`PUT /jobs/{id}`)
- Delete job (`DELETE /jobs/{id}`)

### Features

- Application Status enum
- Automatic timestamps (`created_at`, `updated_at`)
- Skills support
- Company logo field
- AI match score placeholder
- Job notes
- Metadata fields
  - Source
  - Apply URL
  - Salary
  - Experience
  - Work Mode

### Documentation

- API Reference
- Database Schema Updates

## Concepts Learned

- Pydantic Schemas
- Repository Pattern
- Service Layer
- CRUD Operations
- ObjectId Serialization
- MongoDB Collections
- MongoDB Documents
- Async Database Operations
- REST API Design
- HTTP Status Codes

---

# v0.4.0 - Frontend Foundation

## Added

- MainLayout component
- Sidebar component
- Dashboard page
- Jobs page
- Analytics page
- Settings page
- React Router structure
- Frontend folder architecture
- Tailwind CSS v4 integration
- React Icons integration
- Global styling foundation

## Documentation

- Frontend architecture
- Tailwind CSS setup guide

## Concepts Learned

- Component-Based Architecture
- Layout Composition
- React Routing
- Tailwind CSS
- Project Organization

---

# v0.4.1 - Dashboard UI

## Added

- Dashboard statistics cards
- Responsive card layout
- Search bar
- Placement Progress card
- AI Recommendation card
- Welcome section
- Improved sidebar branding

## UI Improvements

- Active navigation styling
- Better spacing hierarchy
- ApplyPilot brand identity

## Concepts Learned

- Dashboard Design
- Responsive Layouts
- UI Composition

---

# v0.4.2 - Recent Applications

## Added

- Recent Applications component
- Activity feed
- Dashboard job preview

## Purpose

Provide quick access to recently tracked applications from the dashboard.

---

# v0.4.3 - Analytics Dashboard

## Added

- Recharts integration
- Application Trends chart
- Analytics preview cards

## Concepts Learned

- Data Visualization
- ResponsiveContainer
- Line Charts
- Analytics Components

---

# v0.4.4 - Dashboard Polish

## Added

- Statistics card icons
- Semantic status badges
- AI Insights panel
- Enhanced analytics visuals

## UI Improvements

- Blue/Cyan design system
- Interactive cards
- Better visual hierarchy
- Improved application status visibility

## Concepts Learned

- Dynamic Styling
- React Icons
- Dashboard UX
- Design Systems
- Consistent UI Patterns

---

# Upcoming (v0.5.0)

## Planned Features

- Kanban Board (Drag & Drop)
- Resume Upload
- AI Resume Matching
- Job Scraper Engine
- Authentication (JWT)
- Saved Filters
- Search & Sorting
- Dashboard Statistics API
- Resume-Job Match Scoring
- Notification System
- Company Scrapers