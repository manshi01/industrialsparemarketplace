"use client"
import React, { useState } from 'react';
import "@/app/assets/zoomable.css";
import Image from 'react-bootstrap/Image';

const images = [
    { src: "/BBL.png", alt: "BBL" },
    { src: "/psp.png", alt: "PSP" },
    { src: "/Schneider.png", alt: "Schneider" },
    { src: "/SPX.png", alt: "SPX" },
    { src: "/SR_Meter.png", alt: "SR Meter" },
    { src: "/Shakti.png", alt: "Shakti" },
    { src: "/Siemens.png", alt: "Siemens" }
];

const ZoomableImage = () => {
    const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

    const handleZoom = (index) => {
        setZoomedImageIndex(index === zoomedImageIndex ? null : index);
    };

    return (
        <div className="d-flex gap-5 p-5 m-2 ">
            {images.map((image, index) => (
                <div key={index} onClick={() => handleZoom(index)} className="zoomable-image-wrapper">
                    <Image
                        src={image.src}
                        width={200}
                        height={80}
                        alt={image.alt}
                        className={`zoomable-image ${zoomedImageIndex === index ? 'zoomed' : ''}`}
                    />
                </div>
            ))}
        </div>
    );
};

export default ZoomableImage;
