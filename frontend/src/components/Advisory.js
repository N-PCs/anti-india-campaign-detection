import React from 'react';

const Advisory = () => {
  const advisories = [
    {
      id: 1,
      title: "Critical Alert: Coordinated Disinformation Campaign",
      level: "HIGH",
      date: "2023-12-01",
      description: "Multiple platforms reporting coordinated anti-India propaganda. All monitoring systems should be on high alert.",
      action: "Increase monitoring frequency and deploy additional analysis resources."
    },
    {
      id: 2,
      title: "Security Update: New Threat Patterns Detected",
      level: "MEDIUM",
      date: "2023-11-28",
      description: "Emerging patterns of misinformation targeting economic policies detected across social media platforms.",
      action: "Update detection algorithms to recognize new threat signatures."
    },
    {
      id: 3,
      title: "Routine Security Bulletin",
      level: "LOW",
      date: "2023-11-25",
      description: "Regular security update with minor threat activity detected. Systems operating within normal parameters.",
      action: "Maintain current monitoring levels and report any anomalies."
    }
  ];

  return (
    <section className="advisory-section">
      <h2>National Security Advisories</h2>
      <div className="advisories-list">
        {advisories.map(advisory => (
          <div key={advisory.id} className={`advisory-card advisory-${advisory.level.toLowerCase()}`}>
            <div className="advisory-header">
              <h3>{advisory.title}</h3>
              <span className={`advisory-level level-${advisory.level.toLowerCase()}`}>
                {advisory.level}
              </span>
            </div>
            <div className="advisory-date">Issued: {advisory.date}</div>
            <div className="advisory-description">
              <p>{advisory.description}</p>
            </div>
            <div className="advisory-action">
              <strong>Recommended Action:</strong>
              <p>{advisory.action}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advisory;