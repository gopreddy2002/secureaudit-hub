from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import ControlCreate, ControlResponse
from models.control_model import Control

router = APIRouter()


from models.audit_model import AuditChecklist

@router.get("/", response_model=list[ControlResponse])
def get_controls(db: Session = Depends(get_db)):
    controls = db.query(Control).all()
    # Fetch all checklists to map status
    checklists = db.query(AuditChecklist).all()
    status_map = {c.control_id: c.status for c in checklists}
    
    result = []
    for c in controls:
        c_dict = c.__dict__.copy()
        c_dict["status"] = status_map.get(c.id, "Not Started")
        result.append(c_dict)
    
    return result


@router.post("/", response_model=ControlResponse)
def create_control(control: ControlCreate, db: Session = Depends(get_db)):
    new_control = Control(**control.dict())
    db.add(new_control)
    db.commit()
    db.refresh(new_control)
    return new_control
