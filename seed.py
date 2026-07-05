import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'backend'))

from database import SessionLocal, engine, Base
from models.control_model import Standard, Control
from models.audit_model import AuditChecklist

def seed_db():
    db = SessionLocal()
    
    # Check if we already have standards
    if db.query(Standard).count() == 0:
        print("Seeding Standards...")
        iso27001 = Standard(name="ISO 27001", description="Information Security Management")
        db.add(iso27001)
        db.commit()
        db.refresh(iso27001)
        
        print("Seeding Controls...")
        c1 = Control(control_id="A.5.1", name="Policies for Information Security", category="Information security policies", description="Management direction for information security", standard_id=iso27001.id)
        c2 = Control(control_id="A.6.1", name="Internal Organization", category="Organization of information security", description="Internal organization roles and responsibilities", standard_id=iso27001.id)
        db.add_all([c1, c2])
        db.commit()
        db.refresh(c1)
        db.refresh(c2)
        
        print("Seeding Audit Checklists...")
        a1 = AuditChecklist(
            control_id=c1.id,
            audit_question="Are the information security policies approved by management, published and communicated to employees and relevant external parties?",
            evidence_required="Copy of information security policy, Meeting minutes showing management approval, Communication records to staff",
            status="In Progress"
        )
        a2 = AuditChecklist(
            control_id=c2.id,
            audit_question="Are all information security responsibilities defined and allocated?",
            evidence_required="Organizational chart, Job descriptions with security responsibilities, Appointment letters",
            status="Not Started"
        )
        db.add_all([a1, a2])
        db.commit()
        print("Database seeding complete!")
    else:
        print("Database already seeded. Skipping.")
        
    db.close()

if __name__ == "__main__":
    seed_db()
