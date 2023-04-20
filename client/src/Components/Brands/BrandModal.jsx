import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewBrand } from "../../redux/shop/action";

const BrandModal = ({ show, onHide, setModal }) => {
  const [input, setInput] = useState("");
  
  const [logo, setLogo] = useState(null);
  const handleLogoUpload = (e) => {
    setLogo(e.target.files[0]);
  };

  const dispatch = useDispatch();

  // handle add brand
  const handleAddBrand = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input);
    form_data.append("brand-photo", logo);

    dispatch(createNewBrand({ data: form_data, setModal, setInput, setLogo }));
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <h4>Create New Brand</h4>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddBrand}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" onChange={handleLogoUpload} />
              {logo && (
                <img
                  style={{
                    maxWidth: "100%",
                    marginTop: "20px",
                    borderRadius: "6px",
                    textAlign: "center"
                  }}
                  src={URL.createObjectURL(logo)}
                  alt=""
                />
              )}
            </Form.Group>
            <Form.Group className="text-end">
              <Button type="submit" variant="light">
                Add
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BrandModal;
