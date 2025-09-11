# Utils package initialization
from .database import init_db, get_db, close_db
from .helpers import generate_content, get_risk_level, format_timestamp
from .multilingual_processor import translate_text, detect_language, process_indian_language

__all__ = [
    'init_db', 'get_db', 'close_db',
    'generate_content', 'get_risk_level', 'format_timestamp',
    'translate_text', 'detect_language', 'process_indian_language'
]