import { createSlug } from "../helper/createSlug.js";
import Tag from "../models/Tag.js";

// get all product tags
export const getAllProductTags = async (req, res, next) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      tags: data,
      message: "Tag all success"
    });
  } catch (error) {
    next(error);
  }
};

// create product tags
export const createProductTags = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Tag.create({ name, slug: createSlug(name) });
    res.status(200).json({
      createTag: data,
      message: "Tag created successful"
    });
  } catch (error) {
    next(error);
  }
};

// get single product tags
export const getSingleProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findById(id);
    res.status(200).json({
      tag: data,
      message: "get single tag success"
    });
  } catch (error) {
    next(error);
  }
};

// delete single product tags
export const deleteProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      tag: data,
      message: "Delete tag success"
    });
  } catch (error) {
    next(error);
  }
};

// update single product tags
export const updateProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const data = await Tag.findByIdAndUpdate(
      id,
      { name, slug: createSlug(name) },
      { new: true }
    );
    res.status(200).json({
      tag: data,
      message: "Tag update  success"
    });
  } catch (error) {
    next(error);
  }
};

// const update tag status
export const updateTagStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updateStatus = await Tag.findByIdAndUpdate(
      id,
      {
        status
      },
      { new: true }
    );

    res.status(200).json({
      updateTagStatus: updateStatus,
      message: "Tag Status Success"
    });
  } catch (error) {
    next(error);
  }
};
