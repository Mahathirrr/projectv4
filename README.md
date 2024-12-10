# PhysioLearn

An AI-powered exercise form analysis system that provides real-time feedback on your workout form.

## Project Structure

```
project/
├── frontend/          # React frontend
└── backend/          # Python backend
    ├── app/          # Flask application
    ├── models/       # ML models
    ├── utils/        # Helper functions
    └── data/         # Training data
```

## Setup

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python run.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Features

- Real-time pose detection and analysis
- Multiple exercise support (Squats, Push-ups, Planks)
- Instant feedback on form corrections
- User-friendly interface