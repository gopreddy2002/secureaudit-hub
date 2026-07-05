from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from datetime import datetime
from database import Base


class RiskAssessment(Base):
    __tablename__ = "risk_assessments"

    id = Column(Integer, primary_key=True, index=True)
    control_id = Column(Integer, ForeignKey("controls.id"))
    risk_level = Column(String)  # e.g. Low, Medium, High, Critical
    description = Column(Text)
    treatment_plan = Column(Text)
    owner = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class SOARecord(Base):
    __tablename__ = "soa_records"

    id = Column(Integer, primary_key=True, index=True)
    control_id = Column(Integer, ForeignKey("controls.id"))
    applicable = Column(String)  # Yes, No
    justification = Column(Text)
    implementation_status = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
