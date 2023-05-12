import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { Button, Form } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import "./Brands.scss";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import {
  deleteBrand,
  editBrand,
  updateBrandStatus
} from "../../redux/shop/action";
import BrandModal from "./BrandModal";
import { useState } from "react";

function BrandMUITable() {
  const dispatch = useDispatch();

  const { brands } = useSelector((state) => state.shop);

  // handle delete button
  const handleDeleteBrand = (id, name) => {
    swal({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));
        swal(`${name} Deleted`, {
          icon: "success"
        });
      }
    });
  };

  // handle brand status
  const handleBrandStatus = (id, status) => {
    dispatch(updateBrandStatus({ id, status: !status }));
  };

  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [Id, setId] = useState();

  const [prevImg, setPrevImg] = useState("");


  // handle edit modal
  const handleEdit = (id) => {
    setModal(true);
    const singleEditData = brands.find((item) => item._id === id);
    setName(singleEditData.name);
    setLogo(singleEditData.photo);

    setId(id);
  };

  // handle Edit Brand
  const handleEditBrand = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", name);
    form_data.append("brand-photo", logo);

    dispatch(editBrand({ Id, data: form_data, setName, setLogo, setModal, setPrevImg }));
  };


  // handle photo
  const handlePhoto = (e) => {
    const pic = e.target.files[0]
    setLogo(pic)
    const prevImg = URL.createObjectURL(pic)
    setPrevImg(prevImg)
  }


  return (
    <>
      <BrandModal show={modal} onHide={setModal} title="Edit Brand">
        <Form onSubmit={handleEditBrand}>
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
            {prevImg && (
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
            )}
          </Form.Group>
          <Form.Group className="text-end">
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form.Group>
        </Form>
      </BrandModal>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="table-row">
              <TableCell>
                <strong>No.</strong>
              </TableCell>
              <TableCell>
                <strong>Name</strong>
              </TableCell>
              <TableCell>
                <strong>Logo</strong>
              </TableCell>
              <TableCell>
                <strong>Published</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {brands.map(({ name, _id, photo, status }, index) => {
              return (
                <TableRow key={index}>
                  <TableCell> {index + 1}.</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>
                    <img
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "cover"
                      }}
                      src={`http://localhost:4040/brands/${photo}`}
                      alt=""
                    />
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={status}
                      onChange={() => handleBrandStatus(_id, status)}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEdit(_id)}
                      className="me-2 btn-sm"
                      variant="warning"
                    >
                      <FaRegEdit style={{ fontSize: "18px", color: "#fff" }} />
                    </Button>

                    <Button
                      onClick={() => handleDeleteBrand(_id, name)}
                      className="btn-sm"
                      variant="danger"
                    >
                      <HiTrash style={{ fontSize: "18px" }} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BrandMUITable;
