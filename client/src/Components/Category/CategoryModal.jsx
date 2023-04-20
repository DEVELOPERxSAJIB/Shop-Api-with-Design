import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCategory } from "../../redux/shop/action";

const CategoryModal = ({ show, onHide, setModal }) => {
  const [input, setInput] = useState("");
  const [photo, setPhoto] = useState(null);

  // call dispatch
  const dispatch = useDispatch();

  // handle photo upload
  const handlePhotoUpdate = (e) => {
    setPhoto(e.target.files[0]);
  };

  // handle submit category
  const handleSubmitCat = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input);
    form_data.append("category-photo", photo);

    dispatch(createCategory({ data: form_data, setInput, setPhoto, setModal }));
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header>
          <h4>Add a new Category</h4>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitCat}>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Photo</Form.Label>
              <Form.Control type="file" onChange={handlePhotoUpdate} />
              {photo && (
                <img
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    objectFit: "cover"
                  }}
                  src={URL.createObjectURL(photo)}
                  alt=""
                />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Button type="submit" variant="success">Add Category</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryModal;
