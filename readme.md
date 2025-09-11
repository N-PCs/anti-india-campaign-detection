# Anti-India Campaign Detection System

An AI-powered solution to detect and analyze coordinated propaganda, hate speech, and misinformation against India across digital platforms.

## Features

- Real-time monitoring of Twitter, YouTube, Facebook, and Telegram
- AI-powered sentiment analysis and content classification
- Coordinated activity detection
- Government-styled dashboard with real-time alerts
- Risk assessment and visualization

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 14+
- Git

### Backend Setup
1. Navigate to backend directory: `cd backend`
2. Create virtual environment: `python -m venv venv`
3. Activate virtual environment:
   - Windows: `venv\Scripts\activate`
   - macOS/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run the server: `python app.py`

### Frontend Setup
1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

### Database Setup
1. Run the database setup script: `python scripts/setup_database.py`

## Usage

1. Access the application at `http://localhost:3000`
2. The backend API will be available at `http://localhost:5000`
3. Real-time WebSocket connections will be established automatically

## API Endpoints

- `GET /` - API status
- `GET /api/stats` - Get detection statistics
- `GET /api/detections` - Get recent detections
- `GET /api/detections/<platform>` - Get detections by platform

## WebSocket Events

- `new_detection` - Sent when a new threat is detected
- `connected` - Sent when a client connects successfully

## Project Structure
anti-india-campaign-detection/
├── backend/ # Flask server with WebSockets
├── frontend/ # React application
├── data/ # Data storage
├── config/ # Configuration files
├── scripts/ # Utility scripts
└── docs/ # Documentation


## Technologies Used

- Frontend: React, Socket.IO Client, CSS3
- Backend: Flask, Flask-SocketIO, Python
- AI: Simulated sentiment analysis and classification
- Database: SQLite (optional)

## License

This project is developed for the Government of India initiative.