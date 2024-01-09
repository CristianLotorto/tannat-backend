const express = require('express');

const router = express.Router();

const controllerAuth = require('../controllers/auth');

router
  .post('/', controllerAuth.getAuth)
module.exports = router;