const product = require('../models/ProductCard');

const getAllProducts = async (req, res) => {
  try {
    const prod = await product.find();

    return res.status(200).json({
      message: 'product list',
      data: prod,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};
const getProductById = async (req, res) => {
  const Id = req.params.id;

  try {
    const result = await product.findById(Id);

    if (result) {
      return res.status(200).json({
        message: 'Product found',
        data: result,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Product not found',
      data: null,
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'there is an error here',
      error,
    });
  }
};

const createProduct = async (req, res) => {
  const {
    title, description, sizes, image, price,
  } = req.body;

  try {
    const result = await product.create({
      title,
      description,
      sizes,
      image,
      price,
    });

    return res.status(201).json({
      message: 'Product Created',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    title, description, sizes, image, price,
  } = req.body;

  try {
    const result = await product.findByIdAndUpdate(
      id,
      {
        title, description, sizes, image, price,
      },
      { new: true },
    );

    if (!result) {
      return res.status(404).json({
        message: 'Product not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Product Updated',
      data: result,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await product.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        message: 'Product not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Product deleted.',
      data: null,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
      data: null,
      error: true,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
