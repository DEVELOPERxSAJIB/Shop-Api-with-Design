import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewTag } from "../../redux/shop/action";

const TagModal = ({ show, onHide, setModal }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTag = (e) => {
    e.preventDefault();

    const data = {
      name: input
    };

    dispatch(createNewTag({ data, setInput, setModal }));
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <ModalHeader closeButton>
          <h4>Add New Tag</h4>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleAddTag}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Button type="submit">Add Tag</Button>
            </Form.Group>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TagModal;
