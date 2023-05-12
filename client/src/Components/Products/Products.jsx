import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import ProductMUITable from "./ProductMUITable";
import ProductModal from "./ProductModal";

const Products = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <ProductModal show={modal} onHide={setModal} />
      <div className="table-content">
        <div className="table-header">
          <h3>Product</h3>
          <button onClick={() => setModal(true)}>
            <FiPlus /> Create New Product
          </button>
        </div>
        <hr />
        <div className="mt-4">
          <ProductMUITable />
        </div>
      </div>
    </>
  );
};

export default Products;
