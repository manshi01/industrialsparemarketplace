import React from 'react';
// import Image from 'next/image';
import { Image } from 'react-bootstrap';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={`container ${styles.aboutUsContainer}`}>
      <div className="row">
        <div className="col-md-6">
          <h1 className='fs-1 fw-bold'>Vision - Unlocking & Solving Global Industrial Procurements.
            Mission - To Make Global Industrial Procurements Reliable, Cheaper, Easier, Risk & Hassle-Free With End to End Logistics Support.</h1>
          <br />   <br />   <br />
          <div className='fw-bold fs-3'>
            Our Core Values (With Priority Sequence)
            <p className='fs-4'> 1. Customer Delight & Statisfaction.</p>
            <p> 2. Integrity (Become Trustable and Run Business with Ethical Way).</p>
            <p> 3. Integrity</p>
            <p> 4. Trust</p>
            <p>5. Relationships Building</p>
          </div>
          <br />   <br />   <br />
          <p>We Are Group Of Engineers, Aiming To Unlock & Solve Global Industrial Procurements With Reliability, Cheaper Prices, Risk & Hassle-Free And End To End Logistics Support, Keeping High Standards For Our Quality Of Products & Services.</p>
        </div>
        <div className="col-md-6 align-self-center">
          <div className='d-flex align-items-center justify-content-between'>
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