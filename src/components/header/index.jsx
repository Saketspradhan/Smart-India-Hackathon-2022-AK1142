import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

function Header() {
  const [showNavRight, setShowNavRight] = useState(false);
  return (
    <MDBNavbar
      style={{
        fontFamily: "Open Sans, sans-serif",
        paddingTop: "3vh",
        paddingBottom: "3vh",
      }}
      expand="lg"
      light
      bgColor="light"
    >
      <MDBContainer fluid>
        <Link to="/">
        <MDBNavbarBrand
          style={{ paddingLeft: "5vw", fontSize: "2em" }}
          href="/"
        >
          One & Zero
        </MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav
            style={{
              fontFamily: "Open Sans, sans-serif",
              paddingRight: "5vw",
              fontSize: "1.5em",
            }}
            right
            fullWidth={false}
            className="mb-2 mb-lg-0"
          >
            <MDBNavbarItem style={{ marginRight: "2vw" }}>
              <MDBNavbarLink>CGISP: Centralised GIS System for Indian Shipping Ports</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
