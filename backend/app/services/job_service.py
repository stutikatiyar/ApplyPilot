"""
FILE: job_service.py

PURPOSE:
Contains business logic related to jobs.

RULE:

Routes should not directly interact
with MongoDB.

Use:

Route
 ↓
Service
 ↓
Database
"""

from app.db.mongodb import database


async def create_job(job_data: dict):

    result = await database.jobs.insert_one(
        job_data
    )

    return str(result.inserted_id)

# Get all jobs from MongoDB
async def get_all_jobs():

    jobs = []

    cursor = database.jobs.find()

    async for job in cursor:

        # MongoDB ObjectId is not JSON serializable
        # Convert it to string
        job["_id"] = str(job["_id"])

        jobs.append(job)

    return jobs