import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Cyber Shield India</h3>
          <p>A Government of India initiative to safeguard national interests in digital spaces.</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Ministry of Electronics and Information Technology</p>
          <p>Email: cybersecurity@gov.in</p>
          <p>Helpline: 1930 (Cyber Crime)</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#">National Cyber Security Policy</a>
          <a href="#">Cyber Crime Reporting Portal</a>
          <a href="#">Digital India Initiative</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Inglorious Coders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;