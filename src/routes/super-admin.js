const express = require('express');

const router = express.Router();

const controllerSuperAdmin = require('../controllers/super-admin');

router
  .put('/:id', controllerSuperAdmin.updateAdmin)
  // .post('/', controllerSuperAdmin.createSuperAdmin)
module.exports = router;
