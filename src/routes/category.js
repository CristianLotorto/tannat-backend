const express = require('express');

const controller = require('../controllers/category');

const authToken = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .delete('/:id', authToken.verifyToken, controller.deleteCateogry)
  .get('/', controller.getAllCategories)
  .get('/:id', controller.getCateogryById)
  .post('/', authToken.verifyToken, controller.createCateogry)
  .put('/:id', authToken.verifyToken, controller.updateCateogry);

module.exports = router;