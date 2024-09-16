// pages/industries.js
import React from 'react';

const industries = () => {
    const industriesList = [
        { title: "Power (Thermal, Hydro Etc.)", imgSrc: "/factory.jpg" },
        { title: "Sugar Factory", imgSrc: "/CementFactoryjpg.jpg" },
        { title: "Cement Factory", imgSrc: "/FBplant.jpg" },
        { title: "Pharmaceutical Plant", imgSrc: "/HydroPlant.png" },
        { title: "Steel Plant", imgSrc: "/Mining.jpeg" },
        { title: "Mining & Minerals", imgSrc: "/PharmaPlant.jpg" },
        { title: "Food & Beverages", imgSrc: "/SteelPlant.jpg" },
        { title: "Other Various Industries", imgSrc: "/SugarPlant.jpg" }
    ];

    return (
        <div style={{ backgroundColor: '#F3F4F6', padding: '20px', minHeight: '100vh' }}>
            <header style={{ textAlign: 'center', padding: '20px 0' }}>
                <h1 style={{ color: '#1F2937', fontSize: '32px' }} className='fw-bold'>Industries We Are Supporting</h1>
            </header>
            <section style={{ textAlign: 'center', marginBottom: '20px' }} className='fw-bold'>
                <div style={{ backgroundColor: '#FBBF24', color: '#1F2937', padding: '10px', fontSize: '20px' }}>
                    Our Vision - To Solve End to End Procurement for Factories/Plants.
                </div>
            </section>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                padding: '0 40px'
            }}
            >
                {industriesList.map((industry, index) => (
                    <div key={index} style={{
                        backgroundColor: '#FFF',
                        padding: '10px',
                        borderRadius: '8px',
                        textAlign: 'center',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}
                    >
                        <img
                            src={industry.imgSrc}
                            alt={industry.title}
                            style={{
                                width: '100%',
                                height: '200px',  // Increased height from 150px to 200px
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }}
                        />
                        <h3 style={{ marginTop: '10px', color: '#1F2937', fontSize: '16px' }}>{industry.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default industries;
