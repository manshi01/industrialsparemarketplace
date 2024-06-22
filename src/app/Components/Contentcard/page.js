import React from "react";
import Image from 'react-bootstrap/Image';
import filter from "@/app/assets/image/filter.png";
import gear from "@/app/assets/image/gearbox.png";
import pump from "@/app/assets/image/pumpspare.png";
import acc from "@/app/assets/image/accumulator.png";
import swich from "@/app/assets/image/swich.png";
import motar from "@/app/assets/image/motorse.png";
import pros from "@/app/assets/image/proximity.png";
import pumps from "@/app/assets/products/KSB industrial Pump.jpg"
import Motors from "@/app/assets/products/Couple Electric Motors.jpg"
import Gears from "@/app/assets/products/Industrial Gearboxes 5.jpg"
import Spareboxes from "@/app/assets/products/instrument&controlspares2.jpg"
import mech from "@/app/assets/products/IndustrialMechanicalSpares1.jpg"
import Valves from "@/app/assets/products/IndustrialValves2.jpg"
import Ec from "@/app/assets/products/ElectricalSpares3.jpeg"
import others from "@/app/assets/products/OtherSparePartsforFactories.jpg"

function ContentCard() {
  return (
    <div className="container py-4">
      {/* <p className="text-center m-4 fw-bold">Our Products</p> */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100 text-center p-3">
            <Image src={pumps.src} alt="Motar" className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-bold fs-3">Pumps & Spares</p>
              <p className="card-text ">Any Types or Brands Pumps & Spares for - Sugar, Power, Cement, Steel, mining, & Other Industries.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center p-3">
            <Image src={Gears.src} alt="Gear" className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-bold fs-3">Gearboxes & Spares</p>
              <p className="card-text fw-bold">Any Types or Brands Gearboxes & Spares for Sugar, Power, Cement, Steel & Other Industries.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center p-3">
            <Image src={Motors.src} alt="Filter" className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-bold fs-3">Motors & Spares</p>
              <p className="card-text fw-bold">Any Types or Brands Motors & Spares for - Sugar, Power, Cement, Steel mining, & Other Industries.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center p-3">
            <Image src={Valves.src} alt="Pump" className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-bold fs-3">Valves & Spares</p>
              <p className="card-text fw-bold">Any Types or Brands Valves & Spares for - Sugar, Power, Cement, Steel mining, & Other Industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
        <div className="col">
          <div className="card h-100 text-center p-3">
            <Image src={Ec.src} alt="Accumulator" className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-bold fs-3">Electrical Spares</p>
              <p className="card-text fw-bold">Any Types or Brands Electrical Spares - Complete Electrical House for Industries.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center p-3">
            <Image src={mech.src} alt="Switch" className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-bold fs-3">Mechanical Spares</p>
              <p className="card-text fw-bold">Any Types or Brands Mechanical Spares - Complete Mechanical  House for Industries.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center p-3">
            <Image src={Spareboxes.src} alt="Proximity Sensor" className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-bold fs-3">I&C Spares</p>
              <p className="card-text fw-bold">Any Types or Brands Instrumentation & Control Spare Parts for Industries.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center p-3">
            <Image src={others.src} alt="Accumulator" className="card-img-top" />
            <div className="card-body">
              <p className="card-text fw-bold fs-3">Other Spare Parts</p>
              <p className="card-text fw-bold">Special Spare Parts Needed for Sugar, Power, Cement, Steel, Mining, & Other Industries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
