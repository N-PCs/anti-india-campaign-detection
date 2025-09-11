import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import PlatformMonitor from './components/PlatformMonitor';
import RealTimeFeed from './components/RealTimeFeed';
import ThreatAnalysis from './components/ThreatAnalysis';
import Reports from './components/Reports';
import Advisory from './components/Advisory';
import Footer from './components/Footer';
import { connectWebSocket, disconnectWebSocket } from './services/websocket';
import './styles/GovernmentTheme.css';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
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
    // Start polling for new detections
    setConnectionStatus('connecting');
    
    const polling = setInterval(async () => {
      try {
        const response = await fetch('http://localhost:5000/api/detections?limit=1');
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            // Get stats separately
            const statsResponse = await fetch('http://localhost:5000/api/stats');
            const latestStats = statsResponse.ok ? await statsResponse.json() : stats;
            
            setConnectionStatus('connected');
            setFeedItems(prevItems => [data[0], ...prevItems].slice(0, 100));
            setStats(latestStats);
          }
        }
      } catch (error) {
        console.error('Polling error:', error);
        setConnectionStatus('disconnected');
      }
    }, 2000); // Poll every 2 seconds

    // Cleanup on component unmount
    return () => {
      clearInterval(polling);
    };
  }, []);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <>
            <Dashboard stats={stats} />
            <PlatformMonitor stats={stats} />
            <RealTimeFeed feedItems={feedItems} />
          </>
        );
      case 'monitoring':
        return <PlatformMonitor stats={stats} detailed={true} />;
      case 'analysis':
        return <ThreatAnalysis stats={stats} feedItems={feedItems} />;
      case 'reports':
        return <Reports stats={stats} feedItems={feedItems} />;
      case 'advisory':
        return <Advisory />;
      default:
        return (
          <>
            <Dashboard stats={stats} />
            <PlatformMonitor stats={stats} />
            <RealTimeFeed feedItems={feedItems} />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <section className="hero">
          <h2>Anti-India Campaign Detection System</h2>
          <p>An AI-powered platform to detect, analyze, and counter coordinated propaganda, hate speech, and misinformation campaigns against India across digital platforms.</p>
          <div className="connection-status">
            <div className={`status-indicator status-${connectionStatus}`}></div>
            <span>{
              connectionStatus === 'connected' ? 'Connected to Monitoring System' : 
              connectionStatus === 'connecting' ? 'Establishing Connection...' : 
              'Connection Disrupted'
            }</span>
          </div>
        </section>
        
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;