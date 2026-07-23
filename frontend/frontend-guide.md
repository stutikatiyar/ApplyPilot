## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/yourusername/CareerOS.git

cd CareerOS
```

---

## Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend will be available at:

```text
http://localhost:5173
```

---

## Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

Windows:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run FastAPI server:

```bash
uvicorn app.main:app --reload
```

Backend will be available at:

```text
http://localhost:8000
```

Swagger Documentation:

```text
http://localhost:8000/docs
```

---

## MongoDB Setup

Install MongoDB Community Edition.

Start MongoDB service:

```bash
mongod
```

Default Connection:

```env
MONGODB_URL=mongodb://localhost:27017
```

Database:

```text
careeros
```

---

## Chrome Extension Setup

Navigate to extension folder:

```bash
cd extension
npm install
```

Build extension:

```bash
npm run build
```

Open Chrome:

```text
chrome://extensions
```

Enable:

```text
Developer Mode
```

Load:

```text
extension/dist
```

---

## Environment Variables

Create a `.env` file inside backend directory.

Example:

```env
MONGODB_URL=mongodb://localhost:27017

DATABASE_NAME=careeros

GEMINI_API_KEY=your_api_key

JWT_SECRET_KEY=your_secret_key

FRONTEND_URL=http://localhost:5173
```

---

## Development Workflow

```text
Chrome Extension
        ↓
FastAPI API
        ↓
MongoDB
        ↓
React Dashboard
```

---

## Build Commands

Frontend:

```bash
npm run build
```

Backend:

```bash
uvicorn app.main:app
```

Extension:

```bash
npm run build
```
