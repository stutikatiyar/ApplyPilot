"""
FILE: mongodb.py

PURPOSE:
Create and manage MongoDB connections.

FLOW:

FastAPI
   ↓
Motor Client
   ↓
MongoDB
"""

from motor.motor_asyncio import AsyncIOMotorClient

from app.core.config import settings


# Create MongoDB client
client = AsyncIOMotorClient(settings.MONGODB_URI)

# Select database
database = client[
    settings.DATABASE_NAME
]