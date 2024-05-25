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
          src="/eng.png"
          alt="First slide"
          width={1300}
          height={500}

        />
        <Carousel.Caption >
          <h3 className=" fs-3 ">Motor Brands We Deal In</h3>
          <p className="">
            We Deal with End to End Products Range of these Brands.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 "
          src="/electro.png"
          alt="First slide"
          width={1300}
          height={500}
        />
        <Carousel.Caption>
          <h3 className="fs-3 ">Major Brands We Deal In</h3>
          <p className=" fs-3">
            We Deal with End to End Products Range of these Brands.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default carousel