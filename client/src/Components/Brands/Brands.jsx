import React, { useState } from "react";
import "./Brands.scss";
import { FiPlus } from "react-icons/fi";
import BrandModal from "./BrandModal";
import BrandMUITable from "./BrandMUITable";

const Brands = () => {
  const [modal, setModal] = useState(false);

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
          setModal={setModal}
          show={modal}
          onHide={() => setModal(false)}
        />
        <hr />
        <div className="mt-4">
          <BrandMUITable />
        </div>
      </div>
    </>
  );
};

export default Brands;
