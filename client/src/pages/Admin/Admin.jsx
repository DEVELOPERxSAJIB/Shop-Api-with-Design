import React from "react";
import "./Admin.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="admin-page py-5">
        <Container>
          <Row>
            <Col md="2">
              <div className="admin-nav">
                <ul>
                  <li>
                    <Link to="dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="tag">Tags</Link>
                  </li>
                  <li>
                    <Link to="brand">Brands</Link>
                  </li>
                  <li>
                    <Link to="category">Category</Link>
                  </li>
                  <li>
                    <Link to="product">Product</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="10">
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Admin;
