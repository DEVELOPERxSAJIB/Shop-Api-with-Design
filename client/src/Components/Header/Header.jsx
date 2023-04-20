import React from "react";
import "./Header.scss";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="header">
        <Container>
          <Row>
            <Col md={3}>
              <a href="/">
                <img
                  src="https://www.startech.com.bd/image/catalog/logo.png"
                  alt=""
                />
              </a>
            </Col>
            <Col md={9}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
