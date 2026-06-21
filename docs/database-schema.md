Database Selection

Chosen Database: MongoDB

Reasoning:

Flexible document structure
Dynamic AI-generated fields
Easier schema evolution
Fast prototyping
Suitable for job and analytics data

Alternative Considered: PostgreSQL

Tradeoff:

PostgreSQL offers stronger relational modeling and transactional guarantees.
MongoDB provides greater flexibility for evolving job documents and AI-generated metadata.

## Connection Verification

Endpoint:

GET /db-test

Purpose:

Verify FastAPI can successfully access MongoDB.

Response:

{
  "database": "careeros"
}