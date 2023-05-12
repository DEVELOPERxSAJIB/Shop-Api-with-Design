import React from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProductModal = ({ show, onHide }) => {
  const { categories, brands, tags } = useSelector((state) => state.shop);

  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg">
        <ModalHeader closeButton>
          <h4>Add new Product</h4>
        </ModalHeader>
        <ModalBody>
          <Form className="product-form">
            <div className="form-left">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Regular Price</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sale Price</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Short Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Long Description</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </div>
            <div className="form-right">
              <Form.Label className="mt-3">
                <strong>Category</strong>
              </Form.Label>
              {categories.map(({ name, _id }, index) => {
                return (
                  <>
                    <Form.Group key={index}>
                      <input type="checkbox" value={_id} /> {name}
                    </Form.Group>
                  </>
                );
              })}

              <Form.Label className="mt-4">
                <strong>Tags</strong>
              </Form.Label>
              {tags.map(({ name, _id }, index) => {
                return (
                  <>
                    <Form.Group key={index}>
                      <input type="checkbox" value={_id} /> {name}
                    </Form.Group>
                  </>
                );
              })}

              <Form.Label className="mt-4">
                <strong>Brands</strong>
              </Form.Label>
              <select className="form-control">
                <option value="">-select-</option>
                {brands.map(({ name, _id }, index) => {
                  return <option value={_id}>{name}</option>;
                })}
              </select>
              <Form.Group className="mt-4">
                <Form.Label>
                  <strong>Gallery Photo</strong>
                </Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
              <Form.Group className="mt-4 text-end">
                <Button className="w-100" type="submit" variant="dark">
                  Add New Product
                </Button>
              </Form.Group>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProductModal;
