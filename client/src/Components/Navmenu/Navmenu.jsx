import React from "react";
import "./Navmenu.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <>
      <div className="nav-menu">
        <Container>
          <Row>
            <Col>
              <ul>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/camera">Camera</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="wish">Wish</Link>
                </li>
                <li>
                  <Link to="admin">Admin</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Navmenu;
