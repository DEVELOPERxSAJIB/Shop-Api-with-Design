import React from "react";
import { Modal } from "react-bootstrap";


const BrandModal = ({ show, onHide, children, title }) => {


  return (
    <>
      <Modal show={show} onHide={() => onHide(false)} centered>
        <Modal.Header closeButton>
          <h4>{title}</h4>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BrandModal;
