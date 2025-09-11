import threading
import time
import random
from datetime import datetime

class TwitterMonitor:
    def __init__(self, socketio, interval=60):
        self.socketio = socketio
        self.interval = interval
        self.running = False
        self.thread = None
        
    def start(self):
        """Start monitoring Twitter for anti-India content"""
        self.running = True
        self.thread = threading.Thread(target=self._monitor_loop)
        self.thread.daemon = True
        self.thread.start()
        print("Twitter monitoring started")
        
    def stop(self):
        """Stop monitoring"""
        self.running = False
        if self.thread:
            self.thread.join()
        print("Twitter monitoring stopped")
        
    def _monitor_loop(self):
        """Main monitoring loop"""
        while self.running:
            try:
                # Simulate API call to Twitter
                self._check_twitter()
            except Exception as e:
                print(f"Error in Twitter monitoring: {e}")
                
            time.sleep(self.interval)
    
    def _check_twitter(self):
        """Check Twitter for anti-India content"""
        # Simulated detection of Twitter content
        if random.random() < 0.7:  # 70% chance of detecting something
            topics = ['Kashmir', 'CAA', 'Farm Laws', 'COVID', 'India-China']
            hashtags = ['#IndiaHates', '#BoycottIndia', '#FreeKashmir', '#IndiaFascist']
            
            topic = random.choice(topics)
            hashtag = random.choice(hashtags)
            
            # Simulated content
            content_samples = [
                f"{hashtag} New propaganda against India regarding {topic}",
                f"Coordinated bot network spreading misinformation about {topic}",
                f"Fake news trending about Indian government's {topic} policy",
                f"Hate speech detected in tweets about {topic}",
                f"Misinformation campaign targeting Indian authorities on {topic}"
            ]
            
            content = random.choice(content_samples)
            
            # Simulate detection data
            detection = {
                'id': f"tw_{datetime.now().strftime('%Y%m%d%H%M%S')}_{random.randint(1000, 9999)}",
                'platform': 'Twitter',
                'content': content,
                'topic': topic,
                'hashtags': [hashtag],
                'retweet_count': random.randint(10, 1000),
                'like_count': random.randint(5, 500),
                'user_verified': random.random() < 0.2,  # 20% chance
                'bot_probability': random.uniform(0.1, 0.9),
                'timestamp': datetime.now().isoformat()
            }
            
            # Emit detection via socket
            self.socketio.emit('twitter_detection', detection)
            print(f"Twitter detection: {content}")