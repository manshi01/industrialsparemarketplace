import React from 'react';
// import Image from 'next/image';
import { Image } from 'react-bootstrap';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={`container ${styles.aboutUsContainer}`}>
      <div className="row">
        <div className="col-md-6">
          <h1 className='heading1'>ABOUT US</h1>
          <p>
            With top brands including Danfoss, EATON, SIEMENS, VICKERS, Char Lynn, Inter-Normen, Hydrokraft, Aeroquip, HAWE, Haldex, NACHI, Concentric, Argo Hytos, Polyhydron, Hydroline, EPE, Mp Filtry, Hindustan Electric Motors, Ferrocare, Bonvario, Kemppi, ACE, TIMKEN, JK Fenner and 25,000+ products in the categories of SWITCHGEARS, MOTORS, Wires & Cables, GEARBOXES, LIGHTING, BEARINGS, DRIVES, TERMINAL BLOCKS, PVC RESIN, PNEUMATICS, LUBRICANTS; We Indtools Sales and services are leading distributors for multiple MNCs in the field of Hydraulics, Electricals, Filtration, Welding, Gearboxes and MRO products.
          </p>
          <p>
            Our Maintenance service including AMC. Always have a focus on services and offer the best technical support to our customers. Installed a state of the art test rig of 75 HP capacity and took jobs of repairing, servicing, refurbishing of your hydraulic pumps, valves, cylinders and motors with certification or Report. Maintain a huge inventory of genuine components for maintenance purpose and never use any substandard or counterfeit spares.
          </p>
          <h2>Hydraulics</h2>
          <p>
            Danfoss (Formerly EATON) – Hydraulic pumps, valves, Motors, Cylinders, Powerpacks, filtration products etc.<br />
            Brands under Eaton Umbrella – VICKERS, Char Lynn, Inter- Normen, Hydrokraft, Aeroquip.<br />
            HAWE – High Pressure radial piston Pump, pumping units, etc.<br />
            Haldex – Flow dividers, Gear pumps.<br />
            Polyhydron – radial piston pumps, pressure switches.<br />
            Hydroline – Suction strainer, return line filters etc.<br />
            EPE- Accumulators and filters.<br />
            Ferrocare – Oil Cleaning machines.
          </p>
          <h2>Electricals</h2>
          <p>
            EATON – Switchgears- MCB, MCCB, Contactors, Relays, Limit Switches, LED lights, Push button, panel accessories etc.<br />
            SIEMENS – Electric Motors, VFD, PLC, HMI.
          </p>
          <h2>Gearbox</h2>
          <p>
            Bonvario – Worm and helical Gear box and gear motors.
          </p>
          <h2>MRO products</h2>
          <p>
            JK Fenner – Pulleys, Couplings and belts.<br />
            Hardware item – Nut bolts , fasteners – complete range.
          </p>
        </div>
        <div className="col-md-6 align-self-center">
          <div className='d-flex align-items-center justify-content-between'>
            <Image
              src="/eng.png"
              alt="Indtools"
              width={700}
              height={600}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;