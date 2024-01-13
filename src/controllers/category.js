const category = require('../models/Category');

const getAllCategories = async (req, res) => {
  try {
    const cat = await category.find();

    return res.status(200).json({
      message: 'Cateogry list',
      data: cat,
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
const getCateogryById = async (req, res) => {
  const Id = req.params.id;

  try {
    const result = await category.findById(Id);

    if (result) {
      return res.status(200).json({
        message: 'Cateogry found',
        data: result,
        error: false,
      });
    }
    return res.status(404).json({
      message: 'Cateogry not found',
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

const createCateogry = async (req, res) => {
  const {
    title, image, link
  } = req.body;

  try {
    const result = await category.create({
      title,
      image,
      link
    });

    return res.status(201).json({
      message: 'Cateogry Created',
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

const updateCateogry = async (req, res) => {
  const { id } = req.params;
  const {
    title, image, link
  } = req.body;

  try {
    const result = await category.findByIdAndUpdate(
      id,
      {
        title, image, link
      },
      { new: true },
    );

    if (!result) {
      return res.status(404).json({
        message: 'Cateogry not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Cateogry Updated',
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

const deleteCateogry = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await category.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        message: 'Cateogry not found',
        data: null,
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Cateogry deleted.',
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
  getAllCategories,
  getCateogryById,
  createCateogry,
  updateCateogry,
  deleteCateogry,
};
