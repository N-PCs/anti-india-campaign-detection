
### docs/ARCHITECTURE.md
```markdown
# System Architecture

## Overview
The Anti-India Campaign Detection System is a full-stack application designed to detect and analyze coordinated propaganda, hate speech, and misinformation against India across digital platforms.

## Components

### Backend (Python/Flask)
- **Flask**: Web framework for API endpoints
- **Flask-SocketIO**: WebSocket support for real-time communication
- **SQLite**: Database for storing detections and statistics
- **Threading**: Background monitoring of social media platforms

### Frontend (React)
- **React**: UI framework for dashboard
- **Socket.IO Client**: Real-time WebSocket communication
- **CSS3**: Styling with Government of India theme

### AI/ML Components
- **Sentiment Analysis**: Detects negative sentiment in content
- **Content Classification**: Categorizes content into threat types
- **Network Analysis**: Identifies coordinated behavior

## Data Flow
1. Platform monitors continuously check social media APIs
2. Detected content is processed through AI models
3. Results are stored in database and sent via WebSocket
4. Frontend displays real-time updates and statistics

## Deployment Architecture
- Backend: Flask application with Gunicorn (production)
- Frontend: React app served via Nginx
- Database: SQLite (development), PostgreSQL (production)
- Monitoring: Custom platform monitors running as background threads

## Security Considerations
- API authentication via JWT tokens
- Secure WebSocket connections (WSS)
- Environment variables for sensitive configuration
- Input validation and sanitization