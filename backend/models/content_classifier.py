import random

def classify_content(text):
    """Simulate content classification"""
    classifications = [
        'Hate Speech',
        'Fake News',
        'Propaganda',
        'Coordinated Inauthentic Behavior',
        'Misinformation',
        'Border Sensitization',
        'Communal Tension',
        'Separatist Narrative'
    ]
    
    # Weight more serious classifications higher
    weights = [0.25, 0.2, 0.15, 0.15, 0.1, 0.05, 0.05, 0.05]
    return random.choices(classifications, weights=weights, k=1)[0]