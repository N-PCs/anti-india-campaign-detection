#!/bin/bash

# Deployment script for Anti-India Campaign Detection System

ENVIRONMENT=${1:-production}

echo "Deploying to $ENVIRONMENT environment..."

# Stop existing services
echo "Stopping existing services..."
pkill -f "python app.py"
pkill -f "npm start"

# Update code
echo "Pulling latest code..."
git pull origin main

# Install dependencies
echo "Installing dependencies..."
./scripts/install_dependencies.sh

# Set environment
export FLASK_ENV=$ENVIRONMENT

# Start backend
echo "Starting backend server..."
cd backend
source venv/bin/activate
nohup python app.py > ../logs/backend.log 2>&1 &
deactivate
cd ..

# Start frontend
echo "Starting frontend server..."
cd frontend
if [ "$ENVIRONMENT" = "production" ]; then
    npm run build
    serve -s build -l 3000 > ../logs/frontend.log 2>&1 &
else
    nohup npm start > ../logs/frontend.log 2>&1 &
fi
cd ..

echo "Deployment completed successfully!"
echo "Backend running on http://localhost:5000"
echo "Frontend running on http://localhost:3000"