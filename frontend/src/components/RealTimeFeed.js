import React from 'react';

const RealTimeFeed = ({ feedItems }) => {
  const getRiskColor = (risk) => {
    switch(risk) {
      case 'high': return '#ff4d4d';
      case 'medium': return '#ffa64d';
      case 'low': return '#4d94ff';
      default: return '#ccc';
    }
  };

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'Twitter': return 'fab fa-twitter';
      case 'YouTube': return 'fab fa-youtube';
      case 'Facebook': return 'fab fa-facebook';
      case 'Telegram': return 'fab fa-telegram';
      default: return 'fas fa-globe';
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = Math.floor((now - time) / 1000);
    
    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    return `${Math.floor(diff / 86400)} days ago`;
  };

  return (
    <section className="realtime-feed">
      <div className="feed-header">
        <h3>Real-time Threat Detection Feed</h3>
        <span>Total Detected: {feedItems.length}</span>
      </div>
      
      <div className="feed-container">
        {feedItems.length === 0 ? (
          <div className="feed-item">
            <p>Monitoring digital platforms for anti-India campaigns...</p>
          </div>
        ) : (
          feedItems.map(item => (
            <div key={item.id} className={`feed-item risk-${item.risk}`}>
              <i className={getPlatformIcon(item.platform)}></i>
              <div className="feed-content">
                <h4>{item.content}</h4>
                <p>Topic: {item.topic} | Classification: {item.classification} | Sentiment: {item.sentiment}</p>
                <div className="feed-meta">
                  <span>Risk: <strong style={{color: getRiskColor(item.risk)}}>{item.risk}</strong> | Coordinated: {item.coordinated ? 'Yes' : 'No'}</span>
                  <span>{formatTime(item.timestamp)}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default RealTimeFeed;