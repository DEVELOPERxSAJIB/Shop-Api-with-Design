import React from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";

const TagModal = ({ show, onHide, children, title }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <ModalHeader closeButton>
          <h4>{title}</h4>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </>
  );
};

export default TagModal;
