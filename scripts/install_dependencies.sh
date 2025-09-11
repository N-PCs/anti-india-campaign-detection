#!/bin/bash

# Script to install all dependencies for the Anti-India Campaign Detection System

echo "Installing backend dependencies..."
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
deactivate
cd ..

echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo "Creating data directories..."
mkdir -p data/models data/multilingual data/samples logs

echo "Initializing database..."
python scripts/setup_database.py

echo "Installation completed successfully!"