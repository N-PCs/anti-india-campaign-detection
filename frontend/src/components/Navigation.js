import React from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-tachometer-alt' },
    { id: 'monitoring', label: 'Platform Monitoring', icon: 'fas fa-desktop' },
    { id: 'analysis', label: 'Threat Analysis', icon: 'fas fa-chart-line' },
    { id: 'reports', label: 'Reports', icon: 'fas fa-file-alt' },
    { id: 'advisory', label: 'National Security Advisory', icon: 'fas fa-shield-alt' }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'nav-item-active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;