// pages/services.js
import React from 'react';

const services = () => {
  return (
    <div style={{ backgroundColor: '', padding: '20px', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        {/* <img src="/logo-color.png" alt="Logo" style={{ width: '100px', height: 'auto' }} /> */}
      </header>
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#1F2937', fontSize: '32px' }} className='fw-bold'>Services We Provide</h1>
        <div style={{ backgroundColor: '#FBBF24', color: '#1F2937', padding: '10px 0', margin: '10px 0', fontSize: '20px' }} className='fw-bold'>
          Services to Make Your Purchase Easy, Risk-Free & Fast With Cost Savings.
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '100px' }}>
        <div style={{ backgroundColor: '#1D4ED8', color: '#FFF', padding: '20px', borderRadius: '8px' }}>
          <h2>1. Fabrication Works.</h2>
          <p>Special Fabrication Needed for Sugar, Power, Cement & Other Industries.</p>
        </div>
        <div style={{ backgroundColor: '#1D4ED8', color: '#FFF', padding: '20px', borderRadius: '8px' }}>
          <h2>2. End to End Procurement Solutions.</h2>
          <p>
            Starting With Taking Prices from Factory till Delivery to Your Site, Including Packing, Inspection,
            Fumigation, Documentation, Logistics, Export & Import, Taxes & Duties.
          </p>
        </div>
        <div style={{ backgroundColor: '#1D4ED8', color: '#FFF', padding: '20px', borderRadius: '8px' }}>
          <h2>3. Spare Parts Consolidation.</h2>
          <p>
            Helping Factories/Plants for Estimating Their Annual Maintenance Budget By Consolidating Spare Parts Prices
            and Later Consolidating & Supplying to Site.
          </p>
        </div>
        <div style={{ backgroundColor: '#1D4ED8', color: '#FFF', padding: '20px', borderRadius: '8px' }}>
          <h2>4. Emergency Purchase.</h2>
          <p>
            Critical Spare Parts Needed? Finding & Supplying Ready Stock By Air Freight With Priority Delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;
