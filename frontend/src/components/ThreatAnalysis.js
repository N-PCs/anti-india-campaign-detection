import React from 'react';

const ThreatAnalysis = ({ stats, feedItems }) => {
  return (
    <section className="analysis-section">
      <h2>Threat Analysis Dashboard</h2>
      <div className="analysis-grid">
        <div className="analysis-card">
          <h3>Risk Distribution</h3>
          <div className="risk-chart">
            <div className="risk-item">
              <span className="risk-label">High Risk</span>
              <span className="risk-value">{stats.high_risk}</span>
              <div className="risk-bar" style={{width: `${(stats.high_risk / stats.total) * 100}%`}}></div>
            </div>
            <div className="risk-item">
              <span className="risk-label">Medium Risk</span>
              <span className="risk-value">{stats.medium_risk}</span>
              <div className="risk-bar" style={{width: `${(stats.medium_risk / stats.total) * 100}%`}}></div>
            </div>
            <div className="risk-item">
              <span className="risk-label">Low Risk</span>
              <span className="risk-value">{stats.low_risk}</span>
              <div className="risk-bar" style={{width: `${(stats.low_risk / stats.total) * 100}%`}}></div>
            </div>
          </div>
        </div>

        <div className="analysis-card">
          <h3>Platform Distribution</h3>
          <div className="platform-chart">
            <div className="platform-item">
              <span className="platform-label">Twitter</span>
              <span className="platform-value">{stats.twitter}</span>
            </div>
            <div className="platform-item">
              <span className="platform-label">YouTube</span>
              <span className="platform-value">{stats.youtube}</span>
            </div>
            <div className="platform-item">
              <span className="platform-label">Facebook</span>
              <span className="platform-value">{stats.facebook}</span>
            </div>
            <div className="platform-item">
              <span className="platform-label">Telegram</span>
              <span className="platform-value">{stats.telegram}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatAnalysis;