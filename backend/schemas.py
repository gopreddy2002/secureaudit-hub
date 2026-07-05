from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime


class UserBase(BaseModel):
    username: str
    email: str
    role: str = "auditor"


class UserCreate(UserBase):
    password: str


class UserResponse(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


class StandardBase(BaseModel):
    name: str
    description: Optional[str] = None


class StandardCreate(StandardBase):
    pass


class StandardResponse(StandardBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


class ControlBase(BaseModel):
    control_id: str
    name: str
    category: str
    description: Optional[str] = None


class ControlCreate(ControlBase):
    standard_id: int


class ControlResponse(ControlBase):
    id: int
    standard_id: int
    created_at: datetime
    status: Optional[str] = None

    class Config:
        from_attributes = True


class AuditChecklistBase(BaseModel):
    audit_question: str
    evidence_required: str
    status: str = "Not Started"


class AuditChecklistCreate(AuditChecklistBase):
    control_id: int


class AuditChecklistResponse(AuditChecklistBase):
    id: int
    control_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class EvidenceFileBase(BaseModel):
    file_name: str
    file_path: str


class EvidenceFileCreate(EvidenceFileBase):
    checklist_id: int
    uploaded_by: int


class EvidenceFileResponse(EvidenceFileBase):
    id: int
    checklist_id: int
    uploaded_by: int
    uploaded_at: datetime

    class Config:
        from_attributes = True


class RiskAssessmentBase(BaseModel):
    risk_level: str
    description: str
    treatment_plan: str
    owner: str


class RiskAssessmentCreate(RiskAssessmentBase):
    control_id: int


class RiskAssessmentResponse(RiskAssessmentBase):
    id: int
    control_id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class ReportBase(BaseModel):
    summary: str
    file_path: str


class ReportCreate(ReportBase):
    standard_id: int
    generated_by: int


class ReportResponse(ReportBase):
    id: int
    standard_id: int
    generated_by: int
    created_at: datetime

    class Config:
        from_attributes = True
