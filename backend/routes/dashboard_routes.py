from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.control_model import Control
from models.audit_model import AuditChecklist
from models.risk_model import RiskAssessment

router = APIRouter()

@router.get("/stats")
def get_dashboard_stats(db: Session = Depends(get_db)):
    total_controls = db.query(Control).count()
    
    checklists = db.query(AuditChecklist).all()
    compliant_count = sum(1 for c in checklists if c.status == "Compliant")
    in_progress_count = sum(1 for c in checklists if c.status == "In Progress")
    
    compliance_percentage = 0
    if total_controls > 0:
        compliance_percentage = int((compliant_count / total_controls) * 100)
        
    open_risks = db.query(RiskAssessment).filter(RiskAssessment.risk_level.in_(["High", "Critical"])).count()
    
    return {
        "overall_compliance": compliance_percentage,
        "open_risks": open_risks,
        "pending_evidence": in_progress_count
    }
