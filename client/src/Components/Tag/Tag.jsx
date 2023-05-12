import React, { useState } from "react";
import "./Tag.scss";
import { FiPlus } from "react-icons/fi";
import TagMUITable from "./TagMUITable";
import TagModal from "./TagModal";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createNewTag } from "../../redux/shop/action";

const Tag = () => {
  const [modal, setModal] = useState(false);

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
      <div className="table-content">
        <div className="table-header">
          <h3>Tags</h3>
          <button onClick={() => setModal(true)}>
            <FiPlus /> Add New Tags
          </button>
        </div>
        <TagModal show={modal} onHide={setModal} setModal={setModal} title="Create Tag">
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
        </TagModal>
        <br />
        <div>
          <TagMUITable />
        </div>
      </div>
    </>
  );
};

export default Tag;
