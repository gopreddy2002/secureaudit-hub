from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from schemas import ControlCreate, ControlResponse
from models.control_model import Control

router = APIRouter()


@router.get("/", response_model=list[ControlResponse])
def get_controls(db: Session = Depends(get_db)):
    return db.query(Control).all()


@router.post("/", response_model=ControlResponse)
def create_control(control: ControlCreate, db: Session = Depends(get_db)):
    new_control = Control(**control.dict())
    db.add(new_control)
    db.commit()
    db.refresh(new_control)
    return new_control
