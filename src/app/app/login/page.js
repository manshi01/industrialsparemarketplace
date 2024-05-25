"use client"
import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

function loginpage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    check: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Row>
        <Col className="m-auto ">
          <div className='center-form-container col-3 m-auto'>
            <div className='text-center fs-1'>Welcome Back</div>
            <div className='text-center'> Welcome back ! Plaese enter your details</div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                <input
                  type="email"
                  placeholder='Enter your email'
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  name="check"
                  checked={formData.check}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </Col>
      </Row>
    </>
  )
}
