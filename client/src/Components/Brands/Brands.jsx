import React, { useState } from "react";
import "./Brands.scss";
import { FiPlus } from "react-icons/fi";
import BrandModal from "./BrandModal";
import BrandMUITable from "./BrandMUITable";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewBrand } from "../../redux/shop/action";

const Brands = () => {
  const [modal, setModal] = useState(false);
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
      <div className="table-content">
        <div className="table-header">
          <h3>Brands</h3>
          <button onClick={() => setModal(true)}>
            <FiPlus /> Create New Brand
          </button>
        </div>
        <BrandModal
          show={modal}
          onHide={setModal}
          title="Create Brand"
        >
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
        </BrandModal>
        <hr />
        <div className="mt-4">
          <BrandMUITable />
        </div>
      </div>
    </>
  );
};

export default Brands;
