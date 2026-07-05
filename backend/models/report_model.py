from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from datetime import datetime
from database import Base


class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    standard_id = Column(Integer, ForeignKey("standards.id"))
    generated_by = Column(Integer, ForeignKey("users.id"))
    summary = Column(Text)
    file_path = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
