import Table from "react-bootstrap/Table";
import Switch from "@mui/material/Switch";
import { FaRegEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function CategoryRBTable() {

  const { categories } = useSelector((state) => state.shop) 

  return (
    <Table striped bordered hover className="align-middle">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Photo</th>
          <th>Published</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {categories.map(({name, photo, status}, index) => {
            return (
              <>
              <tr key={index}>
              
          <td>{index + 1}</td>
          <td>{name}</td>
          <td>
            <img
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
              src={`http://localhost:4040/categories/${photo}`}
              alt=""
            />
          </td>
          <td>
            <Switch checked={status} />
          </td>
          <td>
            <Button className="me-2 btn-sm" variant="warning">
              <FaRegEdit style={{ fontSize: "18px", color: "#fff" }} />
            </Button>

            <Button className="btn-sm" variant="danger">
              <HiTrash style={{ fontSize: "18px" }} />
            </Button>
          </td>
        </tr>
              </>
            )
          })}
      </tbody>
    </Table>
  );
}

export default CategoryRBTable;
