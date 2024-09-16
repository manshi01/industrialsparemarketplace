import React from 'react';
import Link from 'next/link';
import { IoMail } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.fott} text-white py-5`}>
      <div className="container">
        <div className={`row ${styles.fot}`}>
          {/* Company Section */}
          <div className="col-md-2">
            <h5 className={styles.sectionTitle}>Company</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link className={styles.link} href="/homepage">Home</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/aboutus">About Us</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/product">Products</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/services">Services</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/brands">Brands</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/industries">Industries</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/contactus">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="col-md-3">
            <h5 className={styles.sectionTitle}>Products</h5>
            <ul className={styles.list} id={styles.bb}>
              <li className={styles.listItem}>Pumps & Spares</li>
              <li className={styles.listItem}>Gearboxes & Spares</li>
              <li className={styles.listItem}>Motors & Spares</li>
              <li className={styles.listItem}>Valves & Spares</li>
              <li className={styles.listItem}>Electrical Spares</li>
              <li className={styles.listItem}>Mechanical Spares</li>
              <li className={styles.listItem}>I&C Spares</li>
              <li className={styles.listItem}>Other Spare Parts</li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="col-md-2">
            <h5 className={styles.sectionTitle}>Our Services</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link className={styles.link} href="/services">Service 1</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/services">Service 2</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/services">Service 3</Link></li>
            </ul>
          </div>

          {/* Policies Section */}
          <div className="col-md-2">
            <h5 className={styles.sectionTitle}>Our Policies</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}><Link className={styles.link} href="/privacy-policy">Privacy Policy</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/terms-conditions">Terms & Conditions</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/shipping-policy">Shipping Policy</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/return-policy">Return & Refund Policy</Link></li>
              <li className={styles.listItem}><Link className={styles.link} href="/support">Customer Support</Link></li>
            </ul>
          </div>

          {/* Quote and Social Media Section */}
          <div className="col-md-3">
            <h5 className={styles.sectionTitle}>Contact Us</h5>
            <a href="https://forms.gle/aAknas4Var858KqN9" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-light my-2" id={styles.abc}>Request For Quote</button>
            </a>
            <h6 className="mt-4">Follow Us</h6>
            <div className="d-flex justify-content-start gap-3">
              <IoMail className={styles.socialIcon} />
              <FaFacebook className={styles.socialIcon} />
              <FaInstagram className={styles.socialIcon} />
              <FaLinkedinIn className={styles.socialIcon} />
              <FaTwitter className={styles.socialIcon} />
              <FaYoutube className={styles.socialIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        © 2024 Copyright:
        <a className={styles.link} href="https://industrialsparesmarketplace.com/" target="_blank" rel="noopener noreferrer">
          industrialsparesmarketplace.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
