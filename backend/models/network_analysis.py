import random

def detect_coordinated_activity(platform):
    """Simulate detection of coordinated activity"""
    # Higher probability for Telegram and Twitter
    if platform == 'Telegram':
        return random.choices([True, False], weights=[0.7, 0.3], k=1)[0]
    elif platform == 'Twitter':
        return random.choices([True, False], weights=[0.6, 0.4], k=1)[0]
    else:
        return random.choices([True, False], weights=[0.4, 0.6], k=1)[0]