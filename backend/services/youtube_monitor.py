import threading
import time
import random
from datetime import datetime

class YouTubeMonitor:
    def __init__(self, socketio, interval=120):
        self.socketio = socketio
        self.interval = interval
        self.running = False
        self.thread = None
        
    def start(self):
        """Start monitoring YouTube for anti-India content"""
        self.running = True
        self.thread = threading.Thread(target=self._monitor_loop)
        self.thread.daemon = True
        self.thread.start()
        print("YouTube monitoring started")
        
    def stop(self):
        """Stop monitoring"""
        self.running = False
        if self.thread:
            self.thread.join()
        print("YouTube monitoring stopped")
        
    def _monitor_loop(self):
        """Main monitoring loop"""
        while self.running:
            try:
                # Simulate API call to YouTube
                self._check_youtube()
            except Exception as e:
                print(f"Error in YouTube monitoring: {e}")
                
            time.sleep(self.interval)
    
    def _check_youtube(self):
        """Check YouTube for anti-India content"""
        # Simulated detection of YouTube content
        if random.random() < 0.5:  # 50% chance of detecting something
            topics = ['Kashmir', 'CAA', 'Farm Laws', 'COVID', 'India-China']
            topic = random.choice(topics)
            
            # Simulated content
            content_samples = [
                f"Misinformation video about {topic} gaining views",
                f"Anti-India propaganda channel uploading content on {topic}",
                f"Coordinated dislike campaign on videos supporting India's stance on {topic}",
                f"Fake documentary spreading misinformation about {topic}",
                f"Clickbait thumbnails distorting facts about {topic}"
            ]
            
            content = random.choice(content_samples)
            
            # Simulate detection data
            detection = {
                'id': f"yt_{datetime.now().strftime('%Y%m%d%H%M%S')}_{random.randint(1000, 9999)}",
                'platform': 'YouTube',
                'content': content,
                'topic': topic,
                'view_count': random.randint(100, 10000),
                'like_count': random.randint(10, 1000),
                'dislike_count': random.randint(5, 500),
                'comment_count': random.randint(5, 200),
                'timestamp': datetime.now().isoformat()
            }
            
            # Emit detection via socket
            self.socketio.emit('youtube_detection', detection)
            print(f"YouTube detection: {content}")