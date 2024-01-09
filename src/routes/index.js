const express = require('express');

const product = require('./product');

const superAdmin = require('./super-admin');

const auth = require('./auth');

const router = express.Router();

router.use('/product', product);

router.use('/admin', superAdmin);

router.use('/auth', auth);

module.exports = router;
