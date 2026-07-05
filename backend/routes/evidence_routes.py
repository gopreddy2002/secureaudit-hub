from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import EvidenceFileCreate, EvidenceFileResponse
from models.evidence_model import EvidenceFile

router = APIRouter()


@router.get("/", response_model=list[EvidenceFileResponse])
def get_evidence(db: Session = Depends(get_db)):
    return db.query(EvidenceFile).all()


@router.post("/", response_model=EvidenceFileResponse)
def create_evidence(evidence: EvidenceFileCreate, db: Session = Depends(get_db)):
    new_evidence = EvidenceFile(**evidence.dict())
    db.add(new_evidence)
    db.commit()
    db.refresh(new_evidence)
    return new_evidence
