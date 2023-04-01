import colors from "colors";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategory.js";
import productBrandRoute from "./routes/productBrand.js";
import productTagRoute from "./routes/productTagRoute.js";
import productRoute from "./routes/productRoute.js";
import mongoDBConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";

// init express
const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// set static
app.use(express.static("api/public"));

// routes
app.use("/api/v1/product", productRoute);
app.use("/api/v1/product", productCategoryRoute);
app.use("/api/v1/product", productBrandRoute);
app.use("/api/v1/product", productTagRoute);

// envronment variable
const PORT = process.env.PORT || 9090;

// use error handler
app.use(errorHandle);

// listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`server running on port ${PORT}`.bgGreen.black);
});
