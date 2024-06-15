// pages/brands.js
import React from 'react';
// import Image from 'next/image';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './brands.module.css';
const brands = Array.from({ length: 10 }, (_, i) => `/brands/brand${i + 1}.png`);

const Brands = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5">Brands We Deal With</h1>
            <div className="row">
                {brands.map((brand, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                        <div className={styles.imageContainer}>
                            <Image src={brand} alt={`Brand ${index + 1}`} width={200} height={200} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;