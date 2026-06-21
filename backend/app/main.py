from fastapi import FastAPI

from app.db.mongodb import database
from app.api.routes.jobs import router as jobs_router

app = FastAPI(
    title="CareerOS API",
    version="0.1.0"
)

app.include_router(
    jobs_router
)


@app.get("/")
async def root():
    return {
        "message": "CareerOS Backend Running 🚀"
    }


@app.get("/db-test")
async def db_test():

    return {
        "database": database.name
    }