"use client"
import React from 'react'
import { Carousel } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

import 'bootstrap/dist/css/bootstrap.min.css';
function carousel() {
  return (
    <div>
      <Carousel className="w-100">
        <Carousel.Item>
          <Image
            className="d-block w-100  "
            src="/sugarplant.png"
            alt="First slide"
            width={1300}
            height={700}

          />
          <Carousel.Caption >
            <h3 className=" fs-1 ">We're One Stop for End to End Global Industrial Procurement Solutions</h3>
            <p className="fs-4">
              We Help Our Customers Optimise on their Costs (Atleast 20%) & Delivery Time (Atleast 30%) by Procuring from Low Cost Countries and Managing their End to End Logistics to Deliver On Time.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 "
            src="/automation.jpg"
            alt="First slide"
            width={1300}
            height={700}
          />
          <Carousel.Caption>
            <h3 className="fs-1 ">We're One Stop for End to End Global Industrial Procurement Solutions</h3>
            <p className=" fs-4">
              We Help Our Customers Optimise on their Costs (Atleast 20%) & Delivery Time (Atleast 30%) by Procuring from Low Cost Countries and Managing their End to End Logistics to Deliver On Time.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default carousel