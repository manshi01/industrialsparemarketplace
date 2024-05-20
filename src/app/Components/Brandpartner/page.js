import React from "react";
import Image from "next/image";

function Brandimg() {
  return (
    <div className="d-flex flex-column align-items-center">
      <p className="text-center m-4">Our Brand Partner</p>
      <div className="m-4 d-flex flex-wrap justify-content-center gap-5">
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
        <div className="p-2 m-0">
          <Image src="/motorse.png" width={164} height={164} />
        </div>
      </div>
    </div>
  );
}

export default Brandimg;
