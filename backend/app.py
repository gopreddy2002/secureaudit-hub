# pyrefly: ignore [missing-import]
from fastapi import FastAPI
# pyrefly: ignore [missing-import]
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base

# Import all models so SQLAlchemy can create tables
import models

# Import route files
from routes import (
    auth_routes,
    control_routes,
    audit_routes,
    evidence_routes,
    risk_routes,
    report_routes,
)

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="SecureAudit-Hub API",
    description="API for ISO 27001, ISO 27002 and ISO 42001 audit management platform",
    version="1.0.0"
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import os
from fastapi.staticfiles import StaticFiles

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOADS_DIR = os.path.join(BASE_DIR, "uploads")
EVIDENCE_DIR = os.path.join(UPLOADS_DIR, "evidence")
REPORTS_DIR = os.path.join(UPLOADS_DIR, "reports")

os.makedirs(EVIDENCE_DIR, exist_ok=True)
os.makedirs(REPORTS_DIR, exist_ok=True)

app.mount("/uploads", StaticFiles(directory=UPLOADS_DIR), name="uploads")

# Root route
@app.get("/")
def read_root():
    return {
        "message": "Welcome to SecureAudit-Hub API",
        "status": "running"
    }

# Health check route
@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "SecureAudit-Hub API"
    }

# Include routers
app.include_router(auth_routes.router, prefix="/api/auth", tags=["Auth"])
app.include_router(control_routes.router, prefix="/api/controls", tags=["Controls"])
app.include_router(audit_routes.router, prefix="/api/audits", tags=["Audits"])
app.include_router(evidence_routes.router, prefix="/api/evidence", tags=["Evidence"])
app.include_router(risk_routes.router, prefix="/api/risks", tags=["Risks"])
app.include_router(report_routes.router, prefix="/api/reports", tags=["Reports"])

if __name__ == "__main__":
    # pyrefly: ignore [missing-import]
    import uvicorn
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
    