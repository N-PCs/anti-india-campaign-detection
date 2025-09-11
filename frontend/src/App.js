import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import PlatformMonitor from './components/PlatformMonitor';
import RealTimeFeed from './components/RealTimeFeed';
import Footer from './components/Footer';
import { connectWebSocket, disconnectWebSocket } from './services/websocket';
import './styles/GovernmentTheme.css';
import './styles/App.css';

function App() {
  const [connectionStatus, setConnectionStatus] = useState('disconnected');
  const [feedItems, setFeedItems] = useState([]);
  const [stats, setStats] = useState({
    twitter: 1245,
    youtube: 876,
    facebook: 932,
    telegram: 567,
    total: 3620,
    high_risk: 845,
    medium_risk: 1245,
    low_risk: 1530
  });

  useEffect(() => {
    // Connect to WebSocket
    connectWebSocket(
      (data) => {
        setConnectionStatus('connected');
        setFeedItems(prevItems => [data.detection, ...prevItems].slice(0, 100));
        setStats(data.stats);
      },
      () => setConnectionStatus('disconnected'),
      () => setConnectionStatus('connecting')
    );

    // Cleanup on component unmount
    return () => {
      disconnectWebSocket();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <main className="main-content">
        <section className="hero">
          <h2>Anti-India Campaign Detection System</h2>
          <p>An AI-powered platform to detect, analyze, and counter coordinated propaganda, hate speech, and misinformation campaigns against India across digital platforms.</p>
          <div className="connection-status">
            <div className={`status-indicator status-${connectionStatus}`}></div>
            <span>{
              connectionStatus === 'connected' ? 'Connected to Real-time Monitoring System' : 
              connectionStatus === 'connecting' ? 'Establishing Secure Connection...' : 
              'Connection Disrupted'
            }</span>
          </div>
        </section>
        
        <Dashboard stats={stats} />
        <PlatformMonitor stats={stats} />
        <RealTimeFeed feedItems={feedItems} />
      </main>
      <Footer />
    </div>
  );
}

export default App;