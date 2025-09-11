import React from 'react';

const PlatformMonitor = ({ stats }) => {
  return (
    <section className="platform-monitor">
      <div className="platform-header">
        <h3>Multi-Platform Sentiment Analysis</h3>
        <div className="platform-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-telegram"></i>
        </div>
      </div>
      
      <div className="sentiment-analysis">
        <h4>Risk Level Distribution</h4>
        <div className="sentiment-bar">
          <div className="sentiment-fill negative-fill" style={{width: `${(stats.high_risk / stats.total) * 100}%`}}>
            <span className="sentiment-label">High Risk ({Math.round((stats.high_risk / stats.total) * 100)}%)</span>
          </div>
        </div>
        
        <div className="sentiment-bar">
          <div className="sentiment-fill neutral-fill" style={{width: `${(stats.medium_risk / stats.total) * 100}%`}}>
            <span className="sentiment-label">Medium Risk ({Math.round((stats.medium_risk / stats.total) * 100)}%)</span>
          </div>
        </div>
        
        <div className="sentiment-bar">
          <div className="sentiment-fill positive-fill" style={{width: `${(stats.low_risk / stats.total) * 100}%`}}>
            <span className="sentiment-label">Low Risk ({Math.round((stats.low_risk / stats.total) * 100)}%)</span>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <p style={{textAlign: 'center', padding: '80px 0', color: '#888'}}>
          [AI Analysis Visualization Chart]
          <br />
          <span style={{fontSize: '12px'}}>Real-time sentiment tracking across platforms</span>
        </p>
      </div>
    </section>
  );
};

export default PlatformMonitor;