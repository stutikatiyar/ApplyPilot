"""
FILE: job.py

PURPOSE:
Defines the request and response schemas
used by the Job API.

Difference:

Model   -> Database representation
Schema  -> API request/response validation
"""

from datetime import datetime
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, Field


class ApplicationStatus(str, Enum):
    WISHLIST = "Wishlist"
    APPLIED = "Applied"
    ONLINE_ASSESSMENT = "Online Assessment"
    INTERVIEW = "Interview"
    OFFER = "Offer"
    REJECTED = "Rejected"


class JobBase(BaseModel):
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


class JobCreate(JobBase):
    """Schema used when creating a new job."""
    pass


class JobUpdate(BaseModel):
    title: Optional[str] = None
    company: Optional[str] = None
    company_logo: Optional[str] = None

    description: Optional[str] = None

    location: Optional[str] = None
    work_mode: Optional[str] = None

    salary: Optional[str] = None
    experience: Optional[str] = None

    skills: Optional[List[str]] = None

    source: Optional[str] = None
    apply_url: Optional[str] = None
    posted_date: Optional[str] = None

    ai_match_score: Optional[float] = None

    application_status: Optional[ApplicationStatus] = None

    notes: Optional[str] = None


class JobResponse(JobBase):
    id: str

    ai_match_score: float = 0.0

    application_status: ApplicationStatus = ApplicationStatus.WISHLIST

    notes: Optional[str] = None

    created_at: datetime
    updated_at: datetime