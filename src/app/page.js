"use client";
import Image from "next/image";
import styles from "./page.module.css";
import pic from "../../src/app/assets/images/Engineering.png";
import React from "react";
import { Carousel } from "react-bootstrap";
import Contentcard from "./Components/Contentcard/page";
import Productimg from "./Components/Productimg/page";
import Brandimg from "./Components/Brandpartner/page";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyCarousel() {
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
      <div className="text-center fw-bold fs-3 mt-4">Products</div>
      {/* <div className=" d-flex col-12 cursor-pointer  "> */}
        <Contentcard />
      {/* </div> */}
      <div className="text-center fw-bold fs-3 mt-4">Brands we deal with</div>
      <div className="mt-5">
        <Brandimg />
      </div>
    </>
  );
}

export default MyCarousel;
