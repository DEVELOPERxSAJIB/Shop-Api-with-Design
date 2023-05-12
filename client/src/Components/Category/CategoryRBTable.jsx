import Table from "react-bootstrap/Table";
import Switch from "@mui/material/Switch";
import { FaRegEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  catStatusUpdate,
  categoryDelete,
  categoryEdit
} from "../../redux/shop/action";
import CategoryModal from "./CategoryModal";
import { useState } from "react";

function CategoryRBTable() {
  const { categories } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  // handle delete
  const handleDelete = (id) => {
    dispatch(categoryDelete(id));
  };

  // handle status
  const handleCatStatus = (id, status) => {
    dispatch(catStatusUpdate({ id, status: !status }));
  };

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [Id, setId] = useState();

  const [prevImg, setPrevImg] = useState("");

  // handle category edit
  const handleCatEdit = (id) => {
    setModal(true);
    const singleEditData = categories.find((data) => data._id === id);
    setName(singleEditData.name);
    setLogo(singleEditData.photo);

    setId(id);
  };

  // handle edit
  const handleCategoryEdit = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", name);
    form_data.append("category-photo", logo);

    dispatch(categoryEdit({ Id, data: form_data, setModal, setLogo, setName, setPrevImg }));
  };

  // handle photo
  const handlePhoto = (e) => {
    const pic = e.target.files[0]
    setLogo(pic);
    const prevImg = URL.createObjectURL(pic)
    setPrevImg(prevImg)
  }

  return (
    <>
      <CategoryModal show={modal} onHide={setModal} title="Edit Category">
        <Form onSubmit={handleCategoryEdit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Logo</Form.Label>
            <Form.Control
              onChange={handlePhoto}
              type="file"
            />
            <img
              style={{
                maxWidth: "100%",
                marginTop: "20px",
                borderRadius: "6px",
                textAlign: "center"
              }}
              src={prevImg}
              alt=""
            />
          </Form.Group>
          <Form.Group className="text-end">
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form.Group>
        </Form>
      </CategoryModal>

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
          {categories.map(({ _id, name, photo, status }, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover"
                      }}
                      src={`http://localhost:4040/categories/${photo}`}
                      alt=""
                    />
                  </td>
                  <td>
                    <Switch
                      checked={status}
                      onChange={() => handleCatStatus(_id, status)}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => handleCatEdit(_id)}
                      className="me-2 btn-sm"
                      variant="warning"
                    >
                      <FaRegEdit style={{ fontSize: "18px", color: "#fff" }} />
                    </Button>

                    <Button
                      onClick={() => handleDelete(_id)}
                      className="btn-sm"
                      variant="danger"
                    >
                      <HiTrash style={{ fontSize: "18px" }} />
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default CategoryRBTable;
