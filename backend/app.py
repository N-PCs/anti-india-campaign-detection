from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import random
import threading
import time
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'national_security_ai_detection'

# Configure CORS properly
CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])

socketio = SocketIO(app, 
                   cors_allowed_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
                   logger=True,
                   engineio_logger=True)

# Simulated data storage
detected_campaigns = []
stats = {
    'twitter': 1245,
    'youtube': 876,
    'facebook': 932,
    'telegram': 567,
    'total': 3620,
    'high_risk': 845,
    'medium_risk': 1245,
    'low_risk': 1530
}

# Simulated platform monitoring
def monitor_platform(platform):
    """Simulate monitoring of a specific platform"""
    while True:
        time.sleep(random.uniform(2, 5))
        
        # Simulate content detection
        topics = ['Kashmir', 'CAA', 'Farm Laws', 'COVID', 'India-China', 'Pulwama', 'Article 370']
        topic = random.choice(topics)
        
        content = f"Simulated {platform} content about {topic}"
        
        detection = {
            'id': f"{platform[:3]}_{datetime.now().strftime('%Y%m%d%H%M%S')}_{random.randint(1000, 9999)}",
            'platform': platform,
            'content': content,
            'sentiment': 'negative',
            'risk': 'high',
            'coordinated': True,
            'classification': 'Propaganda',
            'topic': topic,
            'timestamp': datetime.now().isoformat()
        }
        
        # Update stats
        stats[platform.lower()] += 1
        stats['total'] += 1
        stats['high_risk'] += 1
        
        # Emit to all connected clients
        socketio.emit('new_detection', {
            'detection': detection,
            'stats': stats
        })
        
        # Store detection
        detected_campaigns.append(detection)
        if len(detected_campaigns) > 1000:
            detected_campaigns.pop(0)

# Background threads for each platform
def start_monitoring():
    platforms = ['Twitter', 'YouTube', 'Facebook', 'Telegram']
    
    for platform in platforms:
        thread = threading.Thread(target=monitor_platform, args=(platform,))
        thread.daemon = True
        thread.start()
    
    return True

# Routes
@app.route('/')
def index():
    return jsonify({
        "message": "Anti-India Campaign Detection API",
        "status": "operational",
        "version": "1.0.0"
    })

@app.route('/api/stats')
def get_stats():
    return jsonify(stats)

@app.route('/api/detections')
def get_detections():
    limit = request.args.get('limit', 50)
    return jsonify(detected_campaigns[-int(limit):])

@app.route('/api/detections/<platform>')
def get_detections_by_platform(platform):
    platform_detections = [d for d in detected_campaigns if d['platform'].lower() == platform.lower()]
    limit = request.args.get('limit', 50)
    return jsonify(platform_detections[-int(limit):])

# WebSocket events
@socketio.on('connect')
def handle_connect():
    print('Client connected')
    emit('connected', {'data': 'Connected to Anti-India Campaign Detection System'})

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    # Start monitoring threads
    start_monitoring()
    
    # Start Flask-SocketIO app
    print("Starting Anti-India Campaign Detection Server...")
    print("Backend API: http://localhost:5000")
    print("WebSocket ready for connections")
    socketio.run(app, debug=True, host='0.0.0.0', port=5000)