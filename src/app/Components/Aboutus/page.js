import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={`container ${styles.aboutUsContainer} py-5`}>
      <div className="row">
        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="fs-2 fw-bold mb-4">
            Our Vision & Mission
          </h2>
          <p className="fs-5">
            <strong>Vision:</strong> Revolutionizing global industrial procurement by unlocking challenges and providing seamless solutions.
          </p>
          <p className="fs-5">
            <strong>Mission:</strong> To deliver reliable, cost-effective, and hassle-free industrial procurement solutions with end-to-end logistics support, ensuring exceptional quality and customer satisfaction.
          </p>

          <h3 className="fs-3 fw-bold mt-5 mb-3">
            Our Core Values
          </h3>
          <ul className="fs-5">
            <li>Customer Satisfaction and Delight</li>
            <li>Unwavering Integrity and Ethical Practices</li>
            <li>Trust and Reliability</li>
            <li>Strong Relationship Building</li>
            <li>Commitment to Quality and Excellence</li>
          </ul>

          <h4 className="fs-4 fw-bold mt-5 mb-3">
            Who We Are
          </h4>
          <p className="fs-5">
            We are a team of dedicated engineers, committed to resolving global industrial procurement challenges. Our goal is to provide reliable, cost-efficient, and comprehensive solutions with end-to-end logistics support, all while upholding the highest standards of quality and service.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 align-self-center">
          <div className="d-flex align-items-center justify-content-center">
            <Image
              src="/chip.png"
              alt="Indtools"
              width={700}
              height={600}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
