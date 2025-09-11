import React from 'react';

const Dashboard = ({ stats }) => {
  return (
    <section className="dashboard">
      <div className="card">
        <h3>Twitter Monitoring</h3>
        <p>Coordinated campaigns, hashtag analysis, bot detection</p>
        <div className="stats">
          <div className="stat-item">
            <div className="stat-value">{stats.twitter}</div>
            <div className="stat-label">Threats Detected</div>
          </div>
          <i className="fab fa-twitter" style={{color: '#1DA1F2', fontSize: '36px'}}></i>
        </div>
      </div>
      
      <div className="card">
        <h3>YouTube Monitoring</h3>
        <p>Misinformation videos, coordinated dislike campaigns</p>
        <div className="stats">
          <div className="stat-item">
            <div className="stat-value">{stats.youtube}</div>
            <div className="stat-label">Threats Detected</div>
          </div>
          <i className="fab fa-youtube" style={{color: '#FF0000', fontSize: '36px'}}></i>
        </div>
      </div>
      
      <div className="card">
        <h3>Facebook Monitoring</h3>
        <p>Fake news pages, group coordination, bot networks</p>
        <div className="stats">
          <div className="stat-item">
            <div className="stat-value">{stats.facebook}</div>
            <div className="stat-label">Threats Detected</div>
          </div>
          <i className="fab fa-facebook" style={{color: '#4267B2', fontSize: '36px'}}></i>
        </div>
      </div>
      
      <div className="card">
        <h3>Telegram Monitoring</h3>
        <p>Encrypted channel analysis, coordination detection</p>
        <div className="stats">
          <div className="stat-item">
            <div className="stat-value">{stats.telegram}</div>
            <div className="stat-label">Threats Detected</div>
          </div>
          <i className="fab fa-telegram" style={{color: '#0088cc', fontSize: '36px'}}></i>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;