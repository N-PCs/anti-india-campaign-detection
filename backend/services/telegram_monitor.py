import threading
import time
import random
from datetime import datetime

class TelegramMonitor:
    def __init__(self, socketio, interval=300):
        self.socketio = socketio
        self.interval = interval
        self.running = False
        self.thread = None
        
    def start(self):
        """Start monitoring Telegram for anti-India content"""
        self.running = True
        self.thread = threading.Thread(target=self._monitor_loop)
        self.thread.daemon = True
        self.thread.start()
        print("Telegram monitoring started")
        
    def stop(self):
        """Stop monitoring"""
        self.running = False
        if self.thread:
            self.thread.join()
        print("Telegram monitoring stopped")
        
    def _monitor_loop(self):
        """Main monitoring loop"""
        while self.running:
            try:
                # Simulate monitoring Telegram channels
                self._check_telegram()
            except Exception as e:
                print(f"Error in Telegram monitoring: {e}")
                
            time.sleep(self.interval)
    
    def _check_telegram(self):
        """Check Telegram for anti-India content"""
        # Simulated detection of Telegram content
        if random.random() < 0.3:  # 30% chance of detecting something
            topics = ['Kashmir', 'CAA', 'Farm Laws', 'COVID', 'India-China']
            topic = random.choice(topics)
            
            # Simulated content
            content_samples = [
                f"Secret channel coordinating anti-India propaganda on {topic}",
                f"Misinformation campaign being organized about {topic}",
                f"Fake news being spread in encrypted groups about {topic}",
                f"Coordinated sharing of manipulated media on {topic}",
                f"Encrypted group planning anti-India activities related to {topic}"
            ]
            
            content = random.choice(content_samples)
            
            # Simulate detection data
            detection = {
                'id': f"tg_{datetime.now().strftime('%Y%m%d%H%M%S')}_{random.randint(1000, 9999)}",
                'platform': 'Telegram',
                'content': content,
                'topic': topic,
                'channel_members': random.randint(100, 5000),
                'message_views': random.randint(50, 2000),
                'encrypted': True,
                'coordinated': random.random() < 0.8,  # 80% chance
                'timestamp': datetime.now().isoformat()
            }
            
            # Emit detection via socket
            self.socketio.emit('telegram_detection', detection)
            print(f"Telegram detection: {content}")