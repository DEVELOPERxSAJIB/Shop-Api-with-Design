import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-area my-3">
        <div className="sidebar-widget">
          <h3>Search</h3>
          <hr />
          <input
            type="search"
            className="form-control"
            placeholder="Search . . ."
          />
        </div>

        <div className="sidebar-category mt-4">
          <h3>Category</h3>
          <div className="category-list mt-2">
            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Men
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Woman
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Kids
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Shoes
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Clothing
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Gadgets
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Parse
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-brands mt-4">
          <h3>Brands</h3>
          <div className="brands-list mt-2">
            <ul>
              <li>
                <label>
                  <input type="checkbox" /> Apple
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Samsung
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Xiaomi
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Oneplus
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" /> Nothing
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-tages mt-4">
            <h3>Tags</h3>
            <ul>
                <a href="/">Ramadan</a>
                <a href="/">Eid</a>
                <a href="/">Boishak</a>
                <a href="/">Puja</a>
                <a href="/">Bosonto</a>
                <a href="/">New Year</a>
            </ul>
        </div>


        <div className="sidebar-pricing">
          <h3>Pricing</h3>
          <div className="pricing-input">
            <input type="text" placeholder="Min" className="form-control" />
            <input type="text" placeholder="Max" className="form-control" />
            <input type="button" value={"Serch"} className="pricing-btn"/>  
          </div>
        </div>


      </div>

    </>
  );
};

export default Sidebar;
