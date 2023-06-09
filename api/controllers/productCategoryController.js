import { createSlug } from "../helper/createSlug.js";
import Category from "../models/Category.js";
import { createError } from "../utils/createError.js";

// get all product category
export const getAllProductCategory = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: "get all data success"
    });
  } catch (error) {
    next(error);
  }
};

// create product category
export const createProductCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Category.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename
    });
    res.status(200).json({
      category: data,
      message: "Category added successful"
    });
  } catch (error) {
    next(error);
  }
};

// get single product category
export const getSingleProductCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Category.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "Single Category Success"
    });
  } catch (error) {
    next(createError("Category not found", 404));
  }
};

// delete single product category
export const deleteProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      deleted_item: data,
      message: "Category Delete Success"
    });
  } catch (error) {
    next(error);
  }
};

// update single product category
export const updateProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;
    const data = await Category.findByIdAndUpdate(
      id,
      { name, 
        slug: createSlug(name), 
        photo: req.file ? req.file.filename : photo },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Category updated Success"
    });
  } catch (error) {
    next(error);
  }
};

// status update
export const updateCategoryStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const upsSatus = await Category.findByIdAndUpdate(
      id,
      {
        status
      },
      { new: true }
    );

    res.status(200).json({
      updatedStatus: upsSatus,
      message: "status successfully updated"
    });
  } catch (error) {
    next(error);
  }
};
