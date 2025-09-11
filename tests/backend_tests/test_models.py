import unittest
from backend.models.sentiment_analysis import analyze_sentiment
from backend.models.network_analysis import detect_coordinated_activity
from backend.models.content_classifier import classify_content

class TestModels(unittest.TestCase):
    
    def test_sentiment_analysis(self):
        """Test sentiment analysis function"""
        # Test with negative keywords
        text_with_negative = "This is hate speech against India"
        sentiment = analyze_sentiment(text_with_negative)
        self.assertIn(sentiment, ['negative', 'neutral', 'positive'])
        
        # Test with neutral text
        neutral_text = "This is a normal statement"
        sentiment = analyze_sentiment(neutral_text)
        self.assertIn(sentiment, ['negative', 'neutral', 'positive'])
    
    def test_network_analysis(self):
        """Test coordinated activity detection"""
        # Test for different platforms
        platforms = ['Twitter', 'YouTube', 'Facebook', 'Telegram']
        for platform in platforms:
            coordinated = detect_coordinated_activity(platform)
            self.assertIsInstance(coordinated, bool)
    
    def test_content_classifier(self):
        """Test content classification"""
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
        
        # Test multiple times
        for _ in range(10):
            classification = classify_content("Test content")
            self.assertIn(classification, classifications)

if __name__ == '__main__':
    unittest.main()