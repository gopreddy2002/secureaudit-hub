from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from schemas import UserCreate, UserResponse, StandardResponse, StandardCreate
from models.user_model import User
from models.control_model import Standard

router = APIRouter()


@router.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    # In production, hash the password
    new_user = User(
        username=user.username,
        email=user.email,
        hashed_password=user.password,
        role=user.role,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


@router.post("/standards", response_model=StandardResponse)
def create_standard(standard: StandardCreate, db: Session = Depends(get_db)):
    new_std = Standard(**standard.dict())
    db.add(new_std)
    db.commit()
    db.refresh(new_std)
    return new_std


@router.get("/standards", response_model=list[StandardResponse])
def get_standards(db: Session = Depends(get_db)):
    return db.query(Standard).all()
