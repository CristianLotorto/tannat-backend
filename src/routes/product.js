const express = require('express');

const controller = require('../controllers/productCard');

const validationId = require('../validations/validateId');

const router = express.Router();

router
  .delete('/:id', validationId.validateId, controller.deleteProduct)
  .get('/', controller.getAllProducts)
  .get('/:id', validationId.validateId, controller.getProductById)
  .post('/', controller.createProduct)
  .put('/:id', validationId.validateId, controller.updateProduct);

module.exports = router;
