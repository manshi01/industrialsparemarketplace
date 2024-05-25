import React from "react";
import Image from "next/image";
import filter from "@/app/assets/image/filter.png"
import gear from "@/app/assets/image/gearbox.png"
import pump from "@/app/assets/image/pumpspare.png"
import acc from "@/app/assets/image/accumulator.png"
import swich from "@/app/assets/image/swich.png"
import motar from "@/app/assets/image/motorse.png"
// import valves from "@/app/assets/image/valves.png"
import pros from "@/app/assets/image/proximity.png"
function contentcard() {
  return (
    <>
      <div className="d-flex cursor-pointer rounded-4 m-4 gap-3">
        <div className="col-3">
          <Image
            className="d-block "
            src={motar.src}
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
            src={gear.src}
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
            src={filter.src}
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
            src={pump.src}
            alt="First slide"
            width={250}
            height={200}
          />
          <div className="fw-bold">
            Any types & Any Brand We Can Support For Industrial Pump & Its Spares
          </div>
        </div>

      </div>
      <div className="d-flex rounded-4 m-4 gap-3 py-5 ">
        <div className="col-3">
          <Image
            className="d-block "
            src={acc.src}
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
            src={swich.src}
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
            src={pros.src}
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
            src={acc.src}
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
