from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "ApplyPilot"
    APP_ENV: str = "development"
    DEBUG: bool = True

    HOST: str = "127.0.0.1"
    PORT: int = 8000

    MONGODB_URI: str
    DATABASE_NAME: str

    AI_MATCH_THRESHOLD: int = 70

    SCRAPER_DELAY: int = 2
    USER_AGENT: str = "ApplyPilotBot/1.0"

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()