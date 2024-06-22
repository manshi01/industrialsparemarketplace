'use client'
import React from "react";
import Lightbox from "./Lightbox";
import 'bootstrap/dist/css/bootstrap.min.css';

function Brandimg() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <Lightbox />
        </div>
      </div>
    </div>
  );
}

export default Brandimg;