import threading
import time
import random
from datetime import datetime

class FacebookMonitor:
    def __init__(self, socketio, interval=180):
        self.socketio = socketio
        self.interval = interval
        self.running = False
        self.thread = None
        
    def start(self):
        """Start monitoring Facebook for anti-India content"""
        self.running = True
        self.thread = threading.Thread(target=self._monitor_loop)
        self.thread.daemon = True
        self.thread.start()
        print("Facebook monitoring started")
        
    def stop(self):
        """Stop monitoring"""
        self.running = False
        if self.thread:
            self.thread.join()
        print("Facebook monitoring stopped")
        
    def _monitor_loop(self):
        """Main monitoring loop"""
        while self.running:
            try:
                # Simulate API call to Facebook
                self._check_facebook()
            except Exception as e:
                print(f"Error in Facebook monitoring: {e}")
                
            time.sleep(self.interval)
    
    def _check_facebook(self):
        """Check Facebook for anti-India content"""
        # Simulated detection of Facebook content
        if random.random() < 0.4:  # 40% chance of detecting something
            topics = ['Kashmir', 'CAA', 'Farm Laws', 'COVID', 'India-China']
            topic = random.choice(topics)
            
            # Simulated content
            content_samples = [
                f"Fake news page spreading misinformation about {topic}",
                f"Coordinated anti-India campaign in groups focused on {topic}",
                f"Bot network amplifying negative content about India's handling of {topic}",
                f"Fake images being shared related to {topic}",
                f"Misleading claims going viral about {topic}"
            ]
            
            content = random.choice(content_samples)
            
            # Simulate detection data
            detection = {
                'id': f"fb_{datetime.now().strftime('%Y%m%d%H%M%S')}_{random.randint(1000, 9999)}",
                'platform': 'Facebook',
                'content': content,
                'topic': topic,
                'share_count': random.randint(5, 500),
                'reaction_count': random.randint(10, 1000),
                'comment_count': random.randint(5, 200),
                'page_likes': random.randint(100, 10000),
                'timestamp': datetime.now().isoformat()
            }
            
            # Emit detection via socket
            self.socketio.emit('facebook_detection', detection)
            print(f"Facebook detection: {content}")