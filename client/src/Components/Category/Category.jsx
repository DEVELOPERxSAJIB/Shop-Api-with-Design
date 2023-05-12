import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import CategoryModal from "./CategoryModal";
import CategoryRBTable from "./CategoryRBTable";
import { Button, Form } from "react-bootstrap";
import { createCategory } from "../../redux/shop/action";
import { useDispatch } from "react-redux";

const Category = () => {
  const [modal, setModal] = useState(false);

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
      <div className="table-content">
        <div className="table-header">
          <h3>Category</h3>
          <button onClick={() => setModal(true)}>
            <FiPlus /> Create New Category
          </button>
        </div>
        <CategoryModal
          show={modal}
          onHide={() => setModal(false)}
          
        >
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
        </CategoryModal>
        <hr />
        <div className="mt-4">
          <CategoryRBTable />
        </div>
      </div>
    </>
  );
};

export default Category;
