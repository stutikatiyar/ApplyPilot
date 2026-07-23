"""
FILE: job_service.py

PURPOSE:
Contains all business logic related to jobs.

Routes should communicate with the service.
The service communicates with the repository.
"""

from app.repositories.job_repository import job_repository
from app.schemas.job import JobCreate, JobUpdate


class JobService:
    """Business logic for Jobs."""

    async def create_job(self, job: JobCreate):
        """
        Create a new job.
        """

        # Future:
        # Check duplicates
        # AI score calculation
        # Skill extraction

        return await job_repository.create_job(job)

    async def get_all_jobs(self):
        """
        Fetch all jobs.
        """

        return await job_repository.get_all_jobs()

    async def get_job_by_id(self, job_id: str):
        """
        Fetch a single job.
        """

        return await job_repository.get_job_by_id(job_id)

    async def update_job(
        self,
        job_id: str,
        job: JobUpdate,
    ):
        """
        Update a job.
        """

        return await job_repository.update_job(
            job_id,
            job,
        )

    async def delete_job(self, job_id: str):
        """
        Delete a job.
        """

        return await job_repository.delete_job(job_id)


job_service = JobService()