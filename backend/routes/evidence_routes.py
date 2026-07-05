from fastapi import APIRouter, Depends, File, UploadFile, Form
from sqlalchemy.orm import Session
from database import get_db
from schemas import EvidenceFileResponse
from models.evidence_model import EvidenceFile
import os
import shutil
import uuid

router = APIRouter()

@router.get("/", response_model=list[EvidenceFileResponse])
def get_evidence(db: Session = Depends(get_db)):
    return db.query(EvidenceFile).order_by(EvidenceFile.uploaded_at.desc()).all()

@router.post("/upload", response_model=EvidenceFileResponse)
def upload_evidence(
    checklist_id: int = Form(...),
    uploaded_by: int = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    # Create unique filename
    file_ext = os.path.splitext(file.filename)[1]
    unique_filename = f"{uuid.uuid4()}{file_ext}"
    file_path = os.path.join("backend", "uploads", "evidence", unique_filename)
    
    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
        
    # Relative path to serve via StaticFiles mounted at /uploads
    serve_path = f"/uploads/evidence/{unique_filename}"
    
    # Save to db
    new_evidence = EvidenceFile(
        file_name=file.filename,
        file_path=serve_path,
        checklist_id=checklist_id,
        uploaded_by=uploaded_by
    )
    db.add(new_evidence)
    db.commit()
    db.refresh(new_evidence)
    return new_evidence
