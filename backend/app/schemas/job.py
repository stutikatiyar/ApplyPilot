from pydantic import BaseModel
from datetime import datetime


class JobCreate(BaseModel):
    title: str
    company: str
    location: str
    job_url: str
    source: str
    status: str = "SCRAPED"
    created_at: datetime = datetime.utcnow()