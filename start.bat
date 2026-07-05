@echo off
echo Starting SecureAudit-Hub Services...

echo Starting Backend API...
start "SecureAudit Backend" cmd /c "cd backend && ..\venv\Scripts\uvicorn.exe app:app --reload --host 127.0.0.1 --port 8000"

echo Starting Frontend...
start "SecureAudit Frontend" cmd /c "cd frontend && npm run dev"

echo Services started! Backend running on http://127.0.0.1:8000, Frontend on http://localhost:5173
pause
