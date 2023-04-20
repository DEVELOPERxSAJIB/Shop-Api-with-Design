import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";

const BrandEditModal = ({ show, onHide, setEditModal }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} setEditModal={setEditModal} centered>
        <ModalHeader closeButton><h4>Update Brands</h4></ModalHeader>
        <ModalBody>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" />
              <img
                style={{
                  maxWidth: "100%",
                  marginTop: "20px",
                  borderRadius: "6px",
                  textAlign: "center"
                }}
                src=""
                alt=""
              />
            </Form.Group>
            <Form.Group className="text-end">
              <Button type="submit" variant="primary">
                Add
              </Button>
            </Form.Group>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default BrandEditModal;
