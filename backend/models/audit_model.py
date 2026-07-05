from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base


class AuditChecklist(Base):
    __tablename__ = "audit_checklists"

    id = Column(Integer, primary_key=True, index=True)
    control_id = Column(Integer, ForeignKey("controls.id"))
    audit_question = Column(Text)
    evidence_required = Column(Text)
    status = Column(
        String, default="Not Started"
    )  # e.g. Compliant, Non-Compliant, Not Started
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    control = relationship("Control", back_populates="checklists")
    comments = relationship("Comment", back_populates="checklist")


class Comment(Base):
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    checklist_id = Column(Integer, ForeignKey("audit_checklists.id"))
    author_id = Column(Integer, ForeignKey("users.id"))
    content = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)

    checklist = relationship("AuditChecklist", back_populates="comments")


class NonConformity(Base):
    __tablename__ = "non_conformities"

    id = Column(Integer, primary_key=True, index=True)
    checklist_id = Column(Integer, ForeignKey("audit_checklists.id"))
    description = Column(Text)
    severity = Column(String)
    status = Column(String, default="Open")
    created_at = Column(DateTime, default=datetime.utcnow)
