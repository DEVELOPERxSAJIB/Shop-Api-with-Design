import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import { Button } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import "./Products.scss";

function ProductMUITable() {
  const { products } = useSelector((state) => state.shop);

  return (
    <>
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
                <strong>Price</strong>
              </TableCell>
              <TableCell>
                <strong>Logo</strong>
              </TableCell>
              <TableCell>
                <strong>Stock</strong>
              </TableCell>
              <TableCell>
                <strong>Category</strong>
              </TableCell>
              <TableCell>
                <strong>Tag</strong>
              </TableCell>
              <TableCell>
                <strong>Brands</strong>
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
            {products.map(
              (
                { name, _id, photo, status, regular_price, sale_price, stock },
                index
              ) => {
                return (
                  <TableRow key={index}>
                    <TableCell> {index + 1}.</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>
                      {sale_price ? (
                        <>
                          <div className="product-price">
                            <span className="regular">{regular_price}৳</span>
                            <span className="sale">{sale_price}৳</span>
                          </div>
                        </>
                      ) : (
                        <div className="product-price">
                          <span className="regular">{regular_price}৳</span>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <img
                        style={{
                          width: "35px",
                          height: "35px",
                          objectFit: "cover"
                        }}
                        src={`http://localhost:4040/products/${photo}`}
                        alt=""
                      />
                    </TableCell>
                    <TableCell>{stock}</TableCell>
                    <TableCell>{stock}</TableCell>
                    <TableCell>{stock}</TableCell>
                    <TableCell>{stock}</TableCell>
                    <TableCell>
                      <Switch checked={status} />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick=""
                        className="me-2 btn-sm"
                        variant="warning"
                      >
                        <FaRegEdit
                          style={{ fontSize: "18px", color: "#fff" }}
                        />
                      </Button>

                      <Button onClick="" className="btn-sm" variant="danger">
                        <HiTrash style={{ fontSize: "18px" }} />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ProductMUITable;
