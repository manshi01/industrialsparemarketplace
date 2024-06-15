
import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className='align-items-center justify-content-center'>
    <div className={`container ${styles.contactUsContainer}`}>
      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className={styles.title}>Contact Us</h1>
          <div className={styles.contactDetails}>
            <p><strong>Industrial Spares Marketplace</strong></p>
            <p><strong>Address:</strong><br />
              88, Safdarjung Enclave, Humayanpur,<br />
              New Delhi, Delhi, India - 110029
            </p>
            <p><strong>Email:</strong><br />
              <a href="mailto:Info@IndustrialSparesMarketplace.com">Info@IndustrialSparesMarketplace.com</a><br />
              <a href="mailto:IndustrialSparesMarketplace@Gmail.com">IndustrialSparesMarketplace@Gmail.com</a>
            </p>
            <p><strong>WhatsApp:</strong><br />
              <a href="https://wa.me/919555413550" target="_blank" rel="noopener noreferrer">wa.me/919555413550</a><br />
              <a href="https://wa.me/919968123147" target="_blank" rel="noopener noreferrer">wa.me/919968123147</a>
            </p>
            <p><strong>Contact us:</strong><br />
              +91 9555413550<br />
              +91 9968123147
            </p>
            <p><strong>Let's have a Cup of Tea/Coffee:</strong><br />
              Safdarjung Enclave, New Delhi,<br />
              Delhi, India - 110029
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
