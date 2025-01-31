"use client";
import React, { useState } from "react";
import { Container, Nav, Navbar, Button, Dropdown, DropdownButton } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

// import logo from "../../assets/images/logo.png";
import "@/app/assets/zoomable.css";
export default function Header() {
  const router = useRouter();
  const handleClick = () => {
    window.open("https://forms.gle/aAknas4Var858KqN9", "_blank");
  }
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <>
      <Navbar className="bg-main py-3 header" collapseOnSelect expand="lg">
        {/* <Container className="m-0 px-4"> */}
        <Nav.Link className="p-0"  onClick={()=> handleNavigation('/homepage')}>
          <Image
            className="d-block "
            src={"/logo-color.png"}
            width={100}
            height={100}
            alt="Picture of the author"
          ></Image>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="m-auto">
            <Nav.Link href="/homepage" className="fw-bold fs-4 ">Home</Nav.Link>
            <Nav.Link href="/aboutus" className="fw-bold fs-4  ">About Us</Nav.Link>
            <Nav.Link href="/product" className="fw-bold fs-4  "> Products</Nav.Link>
            <Nav.Link href="/services" className="fw-bold fs-4  ">Services</Nav.Link>
            <Nav.Link href="/brands" className="fw-bold fs-4  ">Brands</Nav.Link>
            <Nav.Link href="/industries" className="fw-bold fs-4 ">Industries </Nav.Link>
            <Nav.Link href="/contactus" className="fw-bold fs-4 ">Contact us </Nav.Link>
          </Nav> */}
              <Nav className="m-auto">
      <Nav.Link className="fw-bold fs-4" onClick={() => router.push('/homepage')}>
        Home
      </Nav.Link>
      <Nav.Link className="fw-bold fs-4" onClick={() => router.push('/aboutus')}>
        About Us
      </Nav.Link>
      <Nav.Link className="fw-bold fs-4" onClick={() => router.push('/product')}>
        Products
      </Nav.Link>
      <Nav.Link className="fw-bold fs-4" onClick={() => router.push('/services')}>
        Services
      </Nav.Link>
      <Nav.Link className="fw-bold fs-4" onClick={() => router.push('/brands')}>
        Brands
      </Nav.Link>
      <Nav.Link className="fw-bold fs-4" onClick={() => router.push('/industries')}>
        Industries
      </Nav.Link>
      <Nav.Link className="fw-bold fs-4" onClick={() => router.push('/contactus')}>
        Contact Us
      </Nav.Link>
    </Nav>
          <Nav>
            {/* <Nav.Link className="px-4">
              <Button
                className=" fs-5 button"
                title="Login"
                outline="false"
                opacity="true"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
            </Nav.Link> */}
            <Nav.Link className="px-2">
              <Button
                className=" fs-5 button"
                title="Login"
                outline="false"
                opacity="true"
                onClick={handleClick}
              >
                Request For Quote
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
      {/* <div className="py-4">
        {showSignup && <Signuppage />}
      </div> */}
    </>
  );
}
