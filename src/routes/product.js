const express = require('express');

const controller = require('../controllers/productCard');

const authToken = require('../middlewares/authMiddleware');

const router = express.Router();

router
  .delete('/:id', authToken.verifyToken, controller.deleteProduct)
  .get('/', controller.getAllProducts)
  .get('/:id', controller.getProductById)
  .post('/', authToken.verifyToken, controller.createProduct)
  .put('/:id', authToken.verifyToken, controller.updateProduct);

module.exports = router;
