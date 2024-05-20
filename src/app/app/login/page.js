import React from "react";
import { Button } from "react-bootstrap";

function loginpage() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              @example.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default loginpage;
