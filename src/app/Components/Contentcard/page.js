import React from "react";
import Image from "next/image";

function contentcard() {
  return (
    <div className="d-flex col-12 overflow-x-scroll  cursor-pointer rounded-4 m-4  gap-3">

      {/* <div className="d-flex "> */}
      <Image
        className="d-block "
        src="/pumpmotor.png"
        alt="First slide"
        width={550}
        height={350}
      />
      {/* </div> */}

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
      />

    </div>
  );
}

export default contentcard;
