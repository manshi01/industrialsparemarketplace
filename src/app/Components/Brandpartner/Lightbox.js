'use client';
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/assets/zoomable.css';

const images = [
    { src: "/BBL.png", alt: "BBL" },
    { src: "/psp.png", alt: "PSP" },
    { src: "/Schneider.png", alt: "Schneider" },
    { src: "/SPX.png", alt: "SPX" },
    { src: "/SR_Meter.png", alt: "SR Meter" },
    { src: "/Shakti.png", alt: "Shakti" },
    { src: "/Siemens.png", alt: "Siemens" }
];

const Lightbox = () => {
    const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

    const handleZoom = (index) => {
        setZoomedImageIndex(index === zoomedImageIndex ? null : index);
    };

    return (
        <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
            {images.map((image, index) => (
                <div key={index} onClick={() => handleZoom(index)} className={`zoomable-image-wrapper ${zoomedImageIndex === index ? 'zoomed' : ''}`}>
                    <Image
                        src={image.src}
                        alt={image.alt}
                        className="zoomable-image"
                        fluid
                    />
                </div>
            ))}
        </div>
    );
};

export default Lightbox;
