import React, { useState } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import Lightbox from "./Lightbox";

function Brandimg() {
  const handleClose = () => setShow(false);
  const images = [
    '/Users/manshikogo123/Desktop/my project/project/procurmart/public/BBL-removebg-preview.png',
    'https://via.placeholder.com/300',

  ];
  return (
    <>
      <div className="d-flex ms-2 container ">
        <div className="col-6 col-md-4 col-lg-3 mb-4" >
          <Lightbox />
        </div>
      </div>
    </>
  );

}

export default Brandimg;
