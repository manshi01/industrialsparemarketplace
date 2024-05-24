import React from "react";
import Image from "next/image";

function contentcard() {
  return (
    <>
    <div className="d-flex col-12 cursor-pointer rounded-4 m-4 gap-3">
      <div className="col-3">
        <Image
          className="d-block "
          src="/motorse.png"
          alt="First slide"
          width={250}
          height={200}
        />
        <div className=" fw-bold">
          Any types & Any Brand We Can Support For Industrial Pump & Its Spares

        </div>
      </div>
      <div className="col-3">
        <Image
          className="d-block "
          src="/filter.png"
          alt="First slide"
          width={250}
          height={200}
        />
        <div className="fw-bold">
          Any types & Any Brand We Can Support For Industrial Pump & Its Spares

        </div>
      </div>
      <div className="col-3">
        <Image
          className="d-block "
          src="/gearbox.png"
          alt="First slide"
          width={250}
          height={200}
        />
        <div className="fw-bold">
          Any types & Any Brand We Can Support For Industrial Pump & Its Spares
        </div>
      </div>
      <div className="col-3">
        <Image
          className="d-block "
          src="/pumpspare.png"
          alt="First slide"
          width={250}
          height={200}
        />
        <div className="fw-bold">
          Any types & Any Brand We Can Support For Industrial Pump & Its Spares
        </div>
      </div>

      {/* 
      <Image
        className="d-block "
        src="/sparemotor.png"
        alt="First slide"
        width={550}
        height={350}
      />
      <Image
        className="d-block "
        src="/gearbox.png"
        alt="First slide"
        width={550}
        height={350}
      />
      <Image
        className="d-block "
        src="/walve.png"
        alt="First slide"
        width={550}
        height={350}
      />
      <Image
        className="d-block "
        src="/filter.png"
        alt="First slide"
        width={550}
        height={350}
      /> */}

    </div>
    <div className="d-flex rounded-4 mt-4 gap-3">
    <div className="col-3">
            <Image
              className="d-block "
              src="/accumulator.png"
              alt="First slide"
              width={250}
              height={200}
            />
            <div className="fw-bold">
              Any types & Any Brand We Can Support For Industrial Pump & Its Spares
            </div>
          </div>
          <div className="col-3">
            <Image
              className="d-block "
              src="/swich.png"
              alt="First slide"
              width={250}
              height={200}
            />
            <div className="fw-bold">
              Any types & Any Brand We Can Support For Industrial Pump & Its Spares
            </div>
          </div>
    </div>
    </>
  );
}

export default contentcard;
