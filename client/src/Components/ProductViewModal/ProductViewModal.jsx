import React from "react";
import "./ProductViewModal.scss";
import { Button, Modal } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const ProductViewModal = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5>Apple</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="product-modal">
          <div className="product-img">
            <img
              src="https://www.startech.com.bd/image/cache/catalog/mobile/apple/iphone-14-pro-max/deep-purple/iphone-14-pro-max-deep-purple-01-228x228.webp"
              alt=""
            />
          </div>
          <div className="product-details">
            <h2>Apple iPhone 14 Pro Max 256GB</h2>

            <p>
              Display: 6.7" Super Retina XDR Always-On display Processor: A16
              Bionic chip, Storage: 256GB Camera: 48MP + 12MP + 12MP Rear, 12MP
              Front Features: Dynamic Island, Face ID, Dual eSIM
            </p>
            <hr />
            <div className="pricing">
              <div className="regular">195,000৳</div>
              <div className="sale">225,000৳</div>
            </div>
            <hr />

            <Button className="cart-btn">
              <FaShoppingCart className="buy-icon" />
              Add to Cart
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductViewModal;
