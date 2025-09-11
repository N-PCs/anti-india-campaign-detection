import random

def generate_content(platform, topic):
    """Generate simulated content based on platform and topic"""
    content_templates = {
        'Twitter': [
            f"Hate speech detected regarding {topic}",
            f"Coordinated campaign against India trending #{topic}Issue",
            f"Fake news about Indian government policy on {topic}",
            f"Bot network amplifying anti-India narratives on {topic}",
            f"Misinformation campaign targeting Indian authorities on {topic}"
        ],
        'YouTube': [
            f"Misinformation video about {topic} gaining traction",
            f"Anti-India propaganda channel identified with content on {topic}",
            f"Coordinated dislike campaign on videos supporting India's stance on {topic}",
            f"Fake documentary spreading misinformation about {topic}",
            f"Clickbait thumbnails distorting facts about {topic}"
        ],
        'Facebook': [
            f"Fake news page spreading misinformation about {topic}",
            f"Coordinated anti-India campaign in groups focused on {topic}",
            f"Bot network amplifying negative content about India's handling of {topic}",
            f"Fake images being shared related to {topic}",
            f"Misleading claims going viral about {topic}"
        ],
        'Telegram': [
            f"Secret channel coordinating anti-India propaganda on {topic}",
            f"Misinformation campaign being organized about {topic}",
            f"Fake news being spread in encrypted groups about {topic}",
            f"Coordinated sharing of manipulated media on {topic}",
            f"Encrypted group planning anti-India activities related to {topic}"
        ]
    }
    return random.choice(content_templates[platform])

def get_risk_level(platform, content):
    """Simulate risk assessment"""
    if platform == 'Twitter':
        return random.choices(['high', 'medium', 'low'], weights=[0.6, 0.3, 0.1], k=1)[0]
    elif platform == 'YouTube':
        return random.choices(['high', 'medium', 'low'], weights=[0.5, 0.35, 0.15], k=1)[0]
    elif platform == 'Facebook':
        return random.choices(['high', 'medium', 'low'], weights=[0.4, 0.4, 0.2], k=1)[0]
    else:  # Telegram
        return random.choices(['high', 'medium', 'low'], weights=[0.7, 0.2, 0.1], k=1)[0]