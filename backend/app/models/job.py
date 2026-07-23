"""
Job Database Model

Represents a single job posting stored in MongoDB.
"""

from datetime import datetime
from typing import List, Optional

from pydantic import BaseModel, Field


class Job(BaseModel):
    id: Optional[str] = None

    title: str
    company: str
    company_logo: Optional[str] = None

    description: str

    location: str
    work_mode: str

    salary: Optional[str] = None
    experience: Optional[str] = None

    skills: List[str] = Field(default_factory=list)

    source: str
    apply_url: str
    posted_date: Optional[str] = None

    ai_match_score: float = 0.0

    application_status: str = "Wishlist"
    notes: Optional[str] = None

    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)