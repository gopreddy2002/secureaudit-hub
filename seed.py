import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), 'backend'))

from database import SessionLocal, engine, Base
from models.control_model import Standard, Control
from models.audit_model import AuditChecklist

from models.user_model import User
from models.risk_model import RiskAssessment
import traceback

def seed_db():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    try:
        # Check if we already have standards
        if db.query(Standard).count() == 0:
            print("Seeding Users...")
            user1 = User(username="admin", email="admin@example.com", hashed_password="password", role="admin")
            db.add(user1)
            db.commit()
            
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
                status="Compliant"
            )
            a2 = AuditChecklist(
                control_id=c2.id,
                audit_question="Are all information security responsibilities defined and allocated?",
                evidence_required="Organizational chart, Job descriptions with security responsibilities, Appointment letters",
                status="In Progress"
            )
            db.add_all([a1, a2])
            
            print("Seeding Risks...")
            r1 = RiskAssessment(
                control_id=c1.id,
                risk_level="Low",
                description="Policies might become outdated without regular review.",
                treatment_plan="Schedule annual policy reviews.",
                owner="Security Team"
            )
            r2 = RiskAssessment(
                control_id=c2.id,
                risk_level="High",
                description="Unclear responsibilities lead to missed security alerts.",
                treatment_plan="Define and distribute RACI matrix immediately.",
                owner="HR & IT"
            )
            db.add_all([r1, r2])
            db.commit()
            
            print("Database seeding complete!")
        else:
            print("Database already seeded. Skipping.")
    except Exception as e:
        print(f"Error seeding db: {e}")
        traceback.print_exc()
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_db()
