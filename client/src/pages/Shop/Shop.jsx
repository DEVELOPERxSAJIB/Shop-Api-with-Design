import React from "react";
import "./Shop.scss";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../Components/Product/Product";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Shop = () => {
  return (
    <>
      <div className="shop-main my-4">
        <Container>
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>

            <Col md={9}>
              <div className="shop-items-wrapper">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Shop;
