"""
FILE: config.py

PURPOSE:
Load application configuration from environment variables.

INTERVIEW QUESTION:
Why use environment variables?

Answer:
To avoid hardcoding secrets and configuration values
inside source code.
"""

from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    # MongoDB connection string
    MONGODB_URL: str

    # Database name
    DATABASE_NAME: str

    class Config:
        env_file = ".env"


# Singleton settings object
settings = Settings()