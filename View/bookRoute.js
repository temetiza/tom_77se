const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
// Other book-related routes

module.exports = router;
