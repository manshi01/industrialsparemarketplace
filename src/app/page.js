"use client";
import Image from "next/image";
import styles from "./page.module.css";
import pic from "../../src/app/assets/images/Engineering.png";
import React from "react";
import Contentcard from "./Components/Contentcard/page";
import Brandimg from "./Components/Brandpartner/page";
import Caroudsel from "./Components/Carousel/page";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/page";
import Banner from "./Components/Banner/page";
// import Loginpage from "@/app/app/login/page"
function MyCarousel() {
  return (
    <>
      <Caroudsel />
      <div className="text-center fw-bold fs-3 mt-4"> Our Products</div>
      {/* <div className=" d-flex col-12 cursor-pointer  "> */}
      <Contentcard />
      {/* </div> */}
      <div className="text-center fw-bold fs-3 mt-4">Brands we deal with</div>
      <div className="mt-5">
        <Brandimg />
        {/* <Brandimg/> */}
      </div>
      {/* <div className="mb-4">
        <Banner />
      </div> */}
      <div className="">
        <Footer />
        {/* <Loginpage/> */}
      </div>

    </>
  );
}

export default MyCarousel;
