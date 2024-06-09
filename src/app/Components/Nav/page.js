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
    window.location.href = "https://forms.gle/aAknas4Var858KqN9";
  }
  return (
    <>
      <Navbar className="bg-main py-3 header" collapseOnSelect expand="lg">
        {/* <Container className="m-0 px-4"> */}
        <Navbar.Brand className="p-0" href="/login">
          <Image
            className="d-block "
            src={"/logo.png"}
            width={200}
            height={120}
            alt="Picture of the author"
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#home" className="fw-bold  ">Home</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle className="fw-bold custom-dropdown-toggle border-0" id="dropdown-basic">
                Brands
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#brand1">Brand 1</Dropdown.Item>
                <Dropdown.Item href="#brand2">Brand 2</Dropdown.Item>
                <Dropdown.Item href="#brand3">Brand 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="fw-bold  custom-dropdown-toggle border-0" id="dropdown-basic">
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#brand1">Motors</Dropdown.Item>
                <Dropdown.Item href="#brand2"> </Dropdown.Item>
                <Dropdown.Item href="#brand3">Brand 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="fw-bold  custom-dropdown-toggle border-0" id="dropdown-basic">
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#brand1">Brand 1</Dropdown.Item>
                <Dropdown.Item href="#brand2">Brand 2</Dropdown.Item>
                <Dropdown.Item href="#brand3">Brand 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="fw-bold  custom-dropdown-toggle border-0" id="dropdown-basic">
                Industries
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#brand1">Brand 1</Dropdown.Item>
                <Dropdown.Item href="#brand2">Brand 2</Dropdown.Item>
                <Dropdown.Item href="#brand3">Brand 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#business" className="fw-bold ">Business </Nav.Link>
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
