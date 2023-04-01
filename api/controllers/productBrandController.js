import Brand from "../models/Brand.js";
// get all brands
export const getAllProductBrand = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.status(200).json({
      brands,
      message: "Get brands success",
    });
  } catch (error) {
    next(error);
  }
};

// get all brands
export const createProductBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const brand = await Brand.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      brand,
      message: "Brand created successful",
    });
  } catch (error) {
    next(error);
  }
};

// get all brands
export const getSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    res.status(200).json({
      brand,
      message: "get single Brand successful",
    });
  } catch (error) {
    next(error);
  }
};

// get all brands
export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      brand,
      message: "Brand deleted successful",
    });
  } catch (error) {
    next(error);
  }
};

// get all brands
export const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
        photo,
      },
      { new: true }
    );
    res.status(200).json({
      brand,
      message: "Brand updated successful",
    });
  } catch (error) {
    next(error);
  }
};
