# Changelog

## v0.1.0 - Project Foundation

### Added

* Project repository initialization
* React + TypeScript + Vite setup
* Frontend dependency installation
* Backend folder structure
* Documentation structure
* Initial README
* Architecture documentation

### Documentation

* README.md
* setup-guide.md
* architecture.md

---

## v0.2.0 - Backend & Database Foundation

### Added

* FastAPI application initialization
* Health check endpoint (`GET /`)
* Environment configuration layer
* MongoDB Community Server setup
* MongoDB Compass setup
* MongoDB connection layer
* Database connection test endpoint (`GET /db-test`)

### Documentation

* backend-setup.md
* database-schema.md

### Concepts Learned

* FastAPI
* Routes
* Endpoints
* Environment Variables
* MongoDB
* Motor Driver

---

## v0.3.0 - Job Management API

### Added

* Job schema validation
* Job creation service
* POST `/jobs`
* Enhanced job metadata

  * job_url
  * source
  * status
  * created_at
* Job retrieval service
* GET `/jobs`

### Documentation

* API reference updates
* Database schema updates

### Concepts Learned

* Schema Validation
* Service Layer
* MongoDB Collections
* MongoDB Documents
* find()
* ObjectId Serialization
* GET vs POST

## v0.4.0 - Frontend Dashboard Foundation

### Added

- MainLayout component
- Sidebar component
- Dashboard page
- Jobs page
- Analytics page
- Settings page
- Kanban Board components
- Job Card component
- Stats Cards component
- Route structure

### Purpose

Establish the frontend architecture for the CareerOS dashboard.