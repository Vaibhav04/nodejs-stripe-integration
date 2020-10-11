const express = require('express');
const router = express.Router();

// Controller
const { getHomePage, purchase } = require('../controllers/home');

router.get('/', getHomePage);

router.post('/purchase', purchase);

module.exports = router;
