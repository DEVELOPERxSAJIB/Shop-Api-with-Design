import { createSlug } from "../helper/slugCreate.js";
import Product from "../models/Product.js";
import { unlinkSync } from "fs";

// get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      message: "Get all products"
    });
  } catch (error) {
    next(error);
  }
};

// create single products
export const createProducts = async (req, res, next) => {
  try {
    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      categories,
      tags,
      brands
    } = req.body;

    // get photo name of product
    const photo = req.files["product-photo"][0].filename;

    // get gallery photo name
    let gallery_photo = [];
    req.files["product-gallery-photo"].forEach((element) => {
      gallery_photo.push(element.filename);
    });

    const data = await Product.create({
      name,
      slug: createSlug(name),
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      photo,
      gallery: gallery_photo
    });

    res.status(200).json({
      data,
      message: "product created successfully"
    });
  } catch (error) {
    next(error);
  }
};

// get singel product
export const getSingleProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Product.findOne({ slug });

    res.status(200).json({
      finded_product: data,
      message: "Get single product"
    });
  } catch (error) {
    next(error);
  }
};

// delete singel product
export const deleteSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);

    // delete related files
    unlinkSync(`api/public/products/${data.photo}`);

    data.gallery.forEach((item) => {
      unlinkSync(`api/public/products/${item}`);
    });

    res.status(200).json({
      deleted_product: data,
      message: "delete product successful"
    });
  } catch (error) {
    next(error);
  }
};

// update singel product
export const updateSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      name,
      regular_price,
      sale_price,
      stock,
      short_desc,
      long_desc,
      del_gall,
      categories,
      tags,
      brands
    } = req.body;

    const product = await Product.findById(id);

    // update photo
    let photo = product.photo;
    if (req.files["product-photo"]) {
      photo = req.files["product-photo"][0].filename;
      unlinkSync(`api/public/products/${product.photo}`);
    } else {
      photo = product.photo;
    }

    // add gallery photo
    let gallery_old = product.gallery.filter(
      (data) => !del_gall.includes(data)
    );

    let new_gallery = [];
    if (req.files["product-gallery-photo"]) {
      req.files["product-gallery-photo"].forEach((item) => {
        new_gallery.push(item.filename);
      });
    }

    const final_gallery = gallery_old.concat(new_gallery);

    const data = await product.updateOne(
      {
        name,
        slug: createSlug(name),
        regular_price,
        gallery: final_gallery,
        sale_price,
        stock,
        short_desc,
        long_desc,
        photo
      },
      { new: true }
    );

    // delete related files
    // unlinkSync(`api/public/products/${data.photo}`);

    // data.gallery.forEach((item) => {
    //   unlinkSync(`api/public/products/${item}`);
    // });

    res.status(200).json({
      updated_product: data,
      message: "delete product successful"
    });
  } catch (error) {
    next(error);
  }
};
