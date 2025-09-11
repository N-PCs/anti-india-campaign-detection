import random

def analyze_sentiment(text):
    """Simulate sentiment analysis with bias toward detecting negative sentiment"""
    sentiments = ['negative', 'neutral', 'positive']
    
    # Higher probability for negative sentiment in detection system
    if any(keyword in text.lower() for keyword in ['hate', 'fake', 'propaganda', 'misinformation', 'attack']):
        weights = [0.8, 0.15, 0.05]  # 80% negative
    else:
        weights = [0.6, 0.25, 0.15]  # Still higher weight for negative
        
    return random.choices(sentiments, weights=weights, k=1)[0]