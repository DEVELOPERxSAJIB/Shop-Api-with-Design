import React from "react";
import "./SingleProduct.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { BiBookmark } from "react-icons/bi";
import RelatedProduct from "../../Components/RelatedProduct/RelatedProduct";

const SingleProduct = () => {
  return (
    <>
    <div className="single-product mt-1">

      <Container className="py-5">
        <div className="actions">
          <Row>
            <Col md="6" className="left-area">
              <span>Share:</span>
              <div className="icons">
                <Link className="face">
                  <FaFacebookF className="me-2" />
                </Link>
                <Link className="pin">
                  <BsPinterest />
                </Link>
              </div>
            </Col>
            <Col md="6" className="d-flex justify-content-end right-area">
              <div className="save-to-fav">
                <BiBookmark className="save-icon" />
                <span>Save</span>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md="5">
            <div className="img-area">
              <img
                src="https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-14-pro-max/deep-purple/iphone-14-pro-max-deep-purple-01-500x500.webp"
                alt=""
              />
            </div>
          </Col>
          <Col md="7">
            <div className="details-area">
              <h3>Apple iPhone 14 Pro Max 256GB Deep Purple (USA)</h3>

              <div className="pricing d-flex gap-2">
                <span> Pricing:</span>
                <div className="regular">
                  <p>195,000৳</p>
                </div>
                <div className="sale">225,000৳</div>
              </div>

              <div className="in-stock d-flex gap-2">
                <span>In Stock:</span>
                <p>20</p>
              </div>

              <div className="brand d-flex gap-2">
                <span>Brand:</span>
                <p>Apple</p>
              </div>

              <div className="key-feature">
                <h4>Key Features</h4>
                <div className="short-desc">
                  <ul>
                    <li> Model: iPhone 14 Pro Max</li>
                    <li>Display: 6.7" Super Retina XDR Always-On display</li>
                    <li>Processor: A16 Bionic chip, Storage: 256GB</li>
                    <li> Camera: 48MP + 12MP + 12MP Rear, 12MP Front</li>
                    <li>Features: Dynamic Island, Face ID, Dual eSIM</li>
                    <li>
                      <Link className="view-more" to="/">
                        View More Info
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="quantity">
                <h4>Quantity</h4>
                <div className="add-btn">
                  <input type="number" className="form-control" />
                  <Button className="buy-btn">Buy Now</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

      {/* Related product start */}
      <div className="middle-area py-5">
        <Container>
          <Row>
            <Col md="9">
              <h3>Full Specification</h3>
            </Col>
            <Col md="3">
              <RelatedProduct />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SingleProduct;
