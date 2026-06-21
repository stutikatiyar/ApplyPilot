"""
FILE: jobs.py

PURPOSE:
Expose job-related endpoints.
"""

from fastapi import APIRouter

from app.schemas.job import JobCreate
from app.services.job_service import create_job

router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"]
)


@router.post("/")
async def add_job(job: JobCreate):

    job_id = await create_job(
        job.dict()
    )

    return {
        "message": "Job Created",
        "job_id": job_id
    }