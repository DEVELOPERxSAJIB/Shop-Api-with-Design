import React, { useState } from "react";
import "./Product.scss";
import { Button, Card, CardImg } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import ProductViewModal from "../ProductViewModal/ProductViewModal";
import { Link } from "react-router-dom";

const Product = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="product-item">
        <ProductViewModal show={show} onHide={() => setShow(false)} />
        <Card className="product-card shadow-sm">
          <div className="product-img">
            <Link to="/shdfd">
              <CardImg src="https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-14-pro-max/deep-purple/iphone-14-pro-max-deep-purple-01-228x228.webp"></CardImg>
            </Link>
          </div>
          <Card.Body>
            <Card.Title className="title">
              <Link to="/shdfd">
                <p> Apple iPhone 14 Pro Max 256GB Deep Purple (Singapore)</p>
              </Link>
              <div className="short-desc">
                <ul>
                  <li>Display: 6.7" Super Retina XDR Always-On display</li>
                  <li>Processor: A16 Bionic chip, Storage: 256GB</li>
                  <li>Camera: 48MP + 12MP + 12MP Rear, 12MP Front</li>
                  <li>Features: Dynamic Island, Face ID, Dual eSIM</li>
                </ul>
                <div className="product-price">
                  <span className="regular">195,000৳</span>
                  <span className="sale">225,000৳</span>
                </div>
              </div>
            </Card.Title>
            <div className="product-btn">
              <Button className="buy-now">
                <FaShoppingCart className="buy-icon" />
                Buy Now
              </Button>
              <Button className="view-btn" onClick={() => setShow(true)}>
                <AiOutlineEye className="view-icon" />
                Quick View
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Product;
