"""
FILE: job.py

PURPOSE:
Validate incoming job data.

WHY?

Clients can send anything.

Example:

{
  "title": 123
}

This should be rejected.

Pydantic validates data before it reaches
our business logic.

INTERVIEW QUESTION:
What is schema validation?

Answer:
Ensuring incoming data follows
the expected structure and types.
"""

from pydantic import BaseModel


class JobCreate(BaseModel):

    title: str
    company: strav
    location: str


class JobResponse(JobCreate):

    id: str