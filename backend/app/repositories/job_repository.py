"""
FILE: job_repository.py

PURPOSE:
Handles all database operations related to jobs.

Routes should NEVER directly access MongoDB.
Everything should go through this repository.
"""

from datetime import datetime
from typing import Optional

from bson import ObjectId

from app.db.mongodb import database
from app.schemas.job import JobCreate, JobUpdate


class JobRepository:
    def __init__(self):
        self.collection = database.jobs

    async def create_job(self, job: JobCreate):
        """Insert a new job into MongoDB."""

        job_data = job.model_dump()

        job_data["created_at"] = datetime.utcnow()
        job_data["updated_at"] = datetime.utcnow()

        result = await self.collection.insert_one(job_data)

        return str(result.inserted_id)

    async def get_all_jobs(self):
        """Return all jobs."""

        jobs = []

        async for job in self.collection.find():
            job["id"] = str(job["_id"])
            job.pop("_id")
            jobs.append(job)

        return jobs

    async def get_job_by_id(self, job_id: str):
        """Return one job by ID."""

        job = await self.collection.find_one(
            {"_id": ObjectId(job_id)}
        )

        if not job:
            return None

        job["id"] = str(job["_id"])
        job.pop("_id")

        return job

    async def update_job(
        self,
        job_id: str,
        job: JobUpdate,
    ):
        """Update an existing job."""

        update_data = job.model_dump(exclude_unset=True)

        if not update_data:
            return False

        update_data["updated_at"] = datetime.utcnow()

        result = await self.collection.update_one(
            {"_id": ObjectId(job_id)},
            {
                "$set": update_data
            }
        )

        return result.modified_count > 0

    async def delete_job(self, job_id: str):
        """Delete a job."""

        result = await self.collection.delete_one(
            {"_id": ObjectId(job_id)}
        )

        return result.deleted_count > 0


job_repository = JobRepository()