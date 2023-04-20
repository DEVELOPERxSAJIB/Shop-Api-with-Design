import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import Switch from "@mui/material/Switch";
import { deleteTag, tagStatusUpdate } from "../../redux/shop/action";
import swal from "sweetalert";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

export default function TagMUITable() {
  const { tags } = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  const handleTagDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteTag(id));
        swal("Tag deleted!", {
          icon: "success"
        });
      }
    });
  };

  // handle update status
  const handleUpdateStatus = (id, status) => {
    dispatch(tagStatusUpdate({ id, status : !status }))
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Serial</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Published</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map(({ name, _id, status }, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{index + 1}.</StyledTableCell>
              <StyledTableCell>{name}</StyledTableCell>
              <StyledTableCell>
                <Switch checked={status} onChange={ () => handleUpdateStatus(_id, status) } />
              </StyledTableCell>
              <StyledTableCell>
                <Button className="me-2 btn-sm" variant="warning">
                  <FaRegEdit style={{ fontSize: "18px", color: "#fff" }} />
                </Button>

                <Button
                  onClick={() => handleTagDelete(_id)}
                  className="btn-sm"
                  variant="danger"
                >
                  <HiTrash style={{ fontSize: "18px" }} />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
