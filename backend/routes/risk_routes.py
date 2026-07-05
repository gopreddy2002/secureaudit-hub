from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import RiskAssessmentCreate, RiskAssessmentResponse
from models.risk_model import RiskAssessment

router = APIRouter()


@router.get("/", response_model=list[RiskAssessmentResponse])
def get_risks(db: Session = Depends(get_db)):
    return db.query(RiskAssessment).all()


@router.post("/", response_model=RiskAssessmentResponse)
def create_risk(risk: RiskAssessmentCreate, db: Session = Depends(get_db)):
    new_risk = RiskAssessment(**risk.dict())
    db.add(new_risk)
    db.commit()
    db.refresh(new_risk)
    return new_risk
