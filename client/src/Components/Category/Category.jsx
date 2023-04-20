import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import CategoryModal from "./CategoryModal";
import CategoryRBTable from "./CategoryRBTable";

const Category = () => {
  const [modal, setModal] = useState(false);

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
          setModal={setModal}
        />
        <hr />
        <div className="mt-4">
          <CategoryRBTable />
        </div>
      </div>
    </>
  );
};

export default Category;
