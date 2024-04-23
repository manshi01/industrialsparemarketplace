"use client";
import Image from "next/image";
import styles from "./page.module.css";
import pic from "../../src/app/assets/images/Engineering.png";
import React from "react";
import { Carousel } from "react-bootstrap";

function MyCarousel({ pic }) {
  return (
    <>
      <div className="m-4">
        <Carousel className="w-100">
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/engineering3.png"
              alt="First slide"
              width={1300}
              height={400}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/Engineering.png"
              alt="First slide"
              width={1300}
              height={400}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/enginerring2.png"
              alt="First slide"
              width={1300}
              height={400}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="m-4 ">
        <div className="d-flex ">
          <Image
            className="d-block w-25 h-75 "
            src="/enginerring2.png"
            alt="First slide"
            width={50}
            height={100}
          />
        </div>
      </div>
    </>
  );
}

export default MyCarousel;
