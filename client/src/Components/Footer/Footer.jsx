import React from "react";
import "./Footer.scss"
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col md={6}>
              <p>© 2023 Star Tech & Engineering Ltd | All rights reserved</p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <p>Powered By: Star Soft</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
