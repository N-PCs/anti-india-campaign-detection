import sqlite3
import os
from datetime import datetime

def init_db():
    """Initialize the database with required tables"""
    db_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'detection_db.sqlite')
    os.makedirs(os.path.dirname(db_path), exist_ok=True)
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Create detections table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS detections (
        id TEXT PRIMARY KEY,
        platform TEXT NOT NULL,
        content TEXT NOT NULL,
        sentiment TEXT NOT NULL,
        risk TEXT NOT NULL,
        coordinated BOOLEAN NOT NULL,
        classification TEXT NOT NULL,
        topic TEXT NOT NULL,
        language TEXT,
        timestamp DATETIME NOT NULL
    )
    ''')
    
    # Create stats table
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS stats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        twitter INTEGER DEFAULT 0,
        youtube INTEGER DEFAULT 0,
        facebook INTEGER DEFAULT 0,
        telegram INTEGER DEFAULT 0,
        total INTEGER DEFAULT 0,
        high_risk INTEGER DEFAULT 0,
        medium_risk INTEGER DEFAULT 0,
        low_risk INTEGER DEFAULT 0,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    ''')
    
    # Insert initial stats if not exists
    cursor.execute('SELECT COUNT(*) FROM stats')
    if cursor.fetchone()[0] == 0:
        cursor.execute('''
        INSERT INTO stats (twitter, youtube, facebook, telegram, total, high_risk, medium_risk, low_risk)
        VALUES (1245, 876, 932, 567, 3620, 845, 1245, 1530)
        ''')
    
    conn.commit()
    conn.close()
    print("Database initialized successfully.")

def get_db():
    """Get database connection"""
    db_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'detection_db.sqlite')
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn

def close_db(conn):
    """Close database connection"""
    if conn:
        conn.close()