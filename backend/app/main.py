from fastapi import FastAPI

from app.db.mongodb import database

app = FastAPI(
    title="CareerOS API",
    version="0.1.0"
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