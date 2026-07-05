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

from pydantic import BaseModel

class AuditStatusUpdate(BaseModel):
    status: str
    comments: str = ""

@router.put("/{audit_id}", response_model=AuditChecklistResponse)
def update_audit_status(audit_id: int, update_data: AuditStatusUpdate, db: Session = Depends(get_db)):
    from fastapi import HTTPException
    audit_item = db.query(AuditChecklist).filter(AuditChecklist.id == audit_id).first()
    if not audit_item:
        raise HTTPException(status_code=404, detail="Audit item not found")
    
    audit_item.status = update_data.status
    # If the schema had a comments field we'd update it here
    db.commit()
    db.refresh(audit_item)
    return audit_item
