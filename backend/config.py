import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'national_security_ai_detection_2023'
    DEBUG = os.environ.get('DEBUG', 'True') == 'True'
    HOST = os.environ.get('HOST', '0.0.0.0')
    PORT = int(os.environ.get('PORT', 5000))
    
    # Database configuration
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'sqlite:///detection_db.sqlite')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # API Keys (in production, use environment variables)
    TWITTER_API_KEY = os.environ.get('TWITTER_API_KEY', '')
    YOUTUBE_API_KEY = os.environ.get('YOUTUBE_API_KEY', '')
    FACEBOOK_APP_ID = os.environ.get('FACEBOOK_APP_ID', '')
    FACEBOOK_APP_SECRET = os.environ.get('FACEBOOK_APP_SECRET', '')
    
    # Monitoring intervals (in seconds)
    TWITTER_MONITOR_INTERVAL = int(os.environ.get('TWITTER_MONITOR_INTERVAL', 60))
    YOUTUBE_MONITOR_INTERVAL = int(os.environ.get('YOUTUBE_MONITOR_INTERVAL', 120))
    FACEBOOK_MONITOR_INTERVAL = int(os.environ.get('FACEBOOK_MONITOR_INTERVAL', 180))
    TELEGRAM_MONITOR_INTERVAL = int(os.environ.get('TELEGRAM_MONITOR_INTERVAL', 300))
    
    # AI Model paths
    SENTIMENT_MODEL_PATH = os.environ.get('SENTIMENT_MODEL_PATH', 'data/models/sentiment_model.h5')
    CLASSIFICATION_MODEL_PATH = os.environ.get('CLASSIFICATION_MODEL_PATH', 'data/models/classification_model.pkl')