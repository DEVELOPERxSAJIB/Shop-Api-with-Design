import React, { useState } from "react";
import "./Tag.scss";
import { FiPlus } from "react-icons/fi";
import TagMUITable from "./TagMUITable";
import TagModal from "./TagModal";

const Tag = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="table-content">
        <div className="table-header">
          <h3>Tags</h3>
          <button onClick={() => setModal(true)}>
            <FiPlus /> Add New Tags
          </button>
        </div>
        <TagModal show={modal} onHide={setModal} setModal={setModal} />
        <br />
        <div>
          <TagMUITable />
        </div>
      </div>
    </>
  );
};

export default Tag;
