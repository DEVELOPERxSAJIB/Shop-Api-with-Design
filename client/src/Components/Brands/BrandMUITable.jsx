import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { Button } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import "./Brands.scss";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { deleteBrand, updateBrandStatus } from "../../redux/shop/action";
import BrandEditModal from "./BrandEditModal";
import { useState } from "react";

function BrandMUITable() {
  const dispatch = useDispatch();

  const { brands } = useSelector((state) => state.shop);

  // handle delete button
  const handleDeleteBrand = (id) => {
    swal({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBrand(id));
        swal("Brand Deleted", {
          icon: "success"
        });
      }
    });
  };

  // handle brand status
  const handleBrandStatus = (id, status) => {
    dispatch(updateBrandStatus({ id, status: !status }));
  };

  const [editModal, setEditModal] = useState(false);

  // handle edit modal
  const handleEdit = (id) => {
    BrandEditModal(id, ("", "", setEditModal(true)));
  };

  return (
    <>
      <BrandEditModal
        show={editModal}
        onHide={() => setEditModal(false)}
        setEditModal={setEditModal}
      />

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
                      onClick={() => handleDeleteBrand(_id)}
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
