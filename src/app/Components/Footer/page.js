import React from 'react';
import "@/app/assets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Our Products</h4>
        <ul>
          <li>Motors</li>
          <li>Sensors</li>
          <li>GearBoxes</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Our Policies</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Refund Policy</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Subscribe</h4>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;
