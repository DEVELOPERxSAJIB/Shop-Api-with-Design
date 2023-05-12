import React from "react";
import { Modal } from "react-bootstrap";

const CategoryModal = ({ show, onHide, children }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header>
          <h4>Add a new Category</h4>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryModal;
