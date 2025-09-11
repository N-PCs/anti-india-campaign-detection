import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="govt-header">
        <div className="logo-container">
          <div className="logo">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="govt-text">
            <h1>Cyber Shield India</h1>
            <p>Government of India Initiative</p>
          </div>
        </div>
        <div className="official-logo">
          <i className="fas fa-ashoka-chakra" style={{color: '#000080', fontSize: '32px'}}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;