from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import AuditChecklistCreate, AuditChecklistResponse
from models.audit_model import AuditChecklist

router = APIRouter()


@router.get("/", response_model=list[AuditChecklistResponse])
def get_audits(db: Session = Depends(get_db)):
    return db.query(AuditChecklist).all()


@router.post("/", response_model=AuditChecklistResponse)
def create_audit(audit: AuditChecklistCreate, db: Session = Depends(get_db)):
    new_audit = AuditChecklist(**audit.dict())
    db.add(new_audit)
    db.commit()
    db.refresh(new_audit)
    return new_audit
