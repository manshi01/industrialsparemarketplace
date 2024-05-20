"use client";
import Image from "next/image";
import styles from "./page.module.css";
import pic from "../../src/app/assets/images/Engineering.png";
import React from "react";
import { Carousel } from "react-bootstrap";
import Contentcard from "./Components/Contentcard/page";
import Productimg from "./Components/Productimg/page";
import Brandimg from "./Components/Brandpartner/page";

function MyCarousel({ pic }) {
  return (
    <>
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
              <h3 className=" fs-3 bg-dark">Motor Brands We Deal In</h3>
              <p className="bg-dark">
                We Deal with End to End Products Range of these Brands.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100 "
              src="/chip.png"
              alt="First slide"
              width={1300}
              height={500}
            />
            <Carousel.Caption>
              <h3 className="fs-3 bg-dark">Major Brands We Deal In</h3>
              <p className="bg-dark fs-3">
                We Deal with End to End Products Range of these Brands.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="text-center fw-bold fs-3 ">Products</div>
      <div className=" d-flex col-12 cursor-pointer  ">
        <Contentcard />
      </div>
      <div className="text-center fw-bold fs-3">Brands we deal with</div>
      <div className="mt-5">
        <Carousel className="w-100">
          <Carousel.Item>
            <Image
              className="d-block w-100 opacity-75 "
              src="/slider1.png"
              alt="First slide"
              width={1300}
              height={500}

            />
            <Carousel.Caption >
              <h3 className=" fs-3 bg-dark">Motor Brands We Deal In</h3>
              <p className="bg-dark">
                We Deal with End to End Products Range of these Brands.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100 opacity-75"
              src="/slider2.png"
              alt="First slide"
              width={1300}
              height={500}
            />
            <Carousel.Caption>
              <h3 className="fs-3 bg-dark">Major Brands We Deal In</h3>
              <p className="bg-dark fs-3">
                We Deal with End to End Products Range of these Brands.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* <div className="gap-3 d-flex overflow-x-scroll ">
        <Productimg />

      </div> */}
      {/* <div className="gap-3 d-flex ">
        <Brandimg />
      </div> */}
    </>
  );
}

export default MyCarousel;
