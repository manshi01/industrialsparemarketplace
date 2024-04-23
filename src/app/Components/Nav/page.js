"use client";
import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import logo from "../../assets/images/logo.png";
export default function Header() {
  const router = useRouter();

  return (
    <>
      <Navbar className="bg-main py-3 header" collapseOnSelect expand="lg">
        <Container className="m-0 px-4">
          <Navbar.Brand className="p-0" href="/login">
            <Image
              src={logo.src}
              width={160}
              height={90}
              alt="Picture of the author"
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <FontAwesomeIcon icon={faBars} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#features">Products</Nav.Link>
              <Nav.Link href="#pricing">Services</Nav.Link>
              <Nav.Link href="#AboutUs">Industries </Nav.Link>
              <Nav.Link href="#AboutUs">Business </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="px-4">
                <Button
                  className="btn btn-info"
                  title="Login"
                  outline="false"
                  opacity="true"
                  onClick={() => router.push("/login")}
                >
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link className="px-2">
                <Button
                  className="btn btn-info"
                  title="Login"
                  outline="false"
                  opacity="true"
                  onClick={() => router.push("/login")}
                >
                  Request For Quote
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div className="py-4">
        {showSignup && <Signuppage />}
      </div> */}
    </>
  );
}
