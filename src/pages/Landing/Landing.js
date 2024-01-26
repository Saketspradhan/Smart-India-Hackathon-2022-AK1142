import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import hero from "../../assests/hero.jpg";
import { Link } from "react-router-dom";
function Aboutus() {
    return (
        <div>
            <Container style={{ marginTop: "10vh" }}>

                <Row style={{ marginTop: "3vh", paddingBottom: "15vh" }}>
                    <Col md={12} sm={12} lg={6} style={{ marginTop: "5vw" }}>

                        <h1 style={{ textAlign: "center", fontFamily: "Fira Sans", fontWeight: "bold", color: "#161b22", fontSize: "4em" }}>Welcome to CGISP!</h1>
                        <br />
                        <p style={{ textAlign: "center", fontFamily: "Fira Sans", fontSize: "font-size: 1.1em" }}>
                            This project is aimed at creating a centralized portal for the major Indian shipping ports. Due to the lack of a uniform GIS system at Indian ports, individual pots are responsible for areas which only fall directly under their jurisdiction. These individual hierarchies do not allow for a uniform flow of data streams under the various ports of India. Our project propses a solution to this problem by creating a common portal for all information via leveraging satellite imagery.
                        </p>
                        <div style={{ textAlign: "center" }}>
                            <Link to="/mumbai">
                                <Button style={{color:"black"}}
                                    target="_blank"
                                    rel="noreferrer"
                                    size="lg"
                                    variant="success"
                                >
                                    Start Segmentation of Ports
                                </Button>
                            </Link>
                        </div>


                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div style={{ textAlign: "center" }}>
                            <img width="90%" height="auto" src={hero} alt="hero" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aboutus;
