import React from 'react';

const Reports = ({ stats, feedItems }) => {
  const generateReport = () => {
    const now = new Date();
    return {
      title: `Security Report - ${now.toLocaleDateString()}`,
      generatedAt: now.toISOString(),
      summary: {
        totalThreats: stats.total,
        highRisk: stats.high_risk,
        platforms: {
          twitter: stats.twitter,
          youtube: stats.youtube,
          facebook: stats.facebook,
          telegram: stats.telegram
        }
      },
      recentThreats: feedItems.slice(0, 10)
    };
  };

  const report = generateReport();

  return (
    <section className="reports-section">
      <h2>Security Reports</h2>
      <div className="report-card">
        <h3>{report.title}</h3>
        <div className="report-content">
          <div className="report-summary">
            <h4>Summary</h4>
            <p>Total Threats Detected: <strong>{report.summary.totalThreats}</strong></p>
            <p>High Risk Threats: <strong>{report.summary.highRisk}</strong></p>
            <div className="platform-stats">
              <span>Twitter: {report.summary.platforms.twitter}</span>
              <span>YouTube: {report.summary.platforms.youtube}</span>
              <span>Facebook: {report.summary.platforms.facebook}</span>
              <span>Telegram: {report.summary.platforms.telegram}</span>
            </div>
          </div>
          
          <div className="recent-threats">
            <h4>Recent Threats</h4>
            {report.recentThreats.map((threat, index) => (
              <div key={index} className="threat-item">
                <span className="threat-platform">{threat.platform}</span>
                <span className="threat-content">{threat.content}</span>
                <span className="threat-risk">{threat.risk}</span>
              </div>
            ))}
          </div>
        </div>
        
        <button className="download-btn" onClick={() => alert('Report download functionality would be implemented here')}>
          Download Report
        </button>
      </div>
    </section>
  );
};

export default Reports;