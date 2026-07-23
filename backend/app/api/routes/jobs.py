"""
FILE: jobs.py

PURPOSE:
Expose REST API endpoints for job management.
"""

from fastapi import APIRouter, HTTPException, status

from app.schemas.job import JobCreate, JobUpdate
from app.services.job_service import job_service

router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"],
)


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_job(job: JobCreate):
    """
    Create a new job.
    """
    job_id = await job_service.create_job(job)

    return {
        "message": "Job created successfully",
        "job_id": job_id,
    }


@router.get("/")
async def get_all_jobs():
    """
    Get all jobs.
    """
    return await job_service.get_all_jobs()


@router.get("/{job_id}")
async def get_job(job_id: str):
    """
    Get a single job by ID.
    """
    job = await job_service.get_job_by_id(job_id)

    if not job:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Job not found",
        )

    return job


@router.put("/{job_id}")
async def update_job(job_id: str, job: JobUpdate):
    """
    Update a job.
    """
    updated = await job_service.update_job(job_id, job)

    if not updated:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Job not found",
        )

    return {
        "message": "Job updated successfully",
    }


@router.delete("/{job_id}")
async def delete_job(job_id: str):
    """
    Delete a job.
    """
    deleted = await job_service.delete_job(job_id)

    if not deleted:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Job not found",
        )

    return {
        "message": "Job deleted successfully",
    }