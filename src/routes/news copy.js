const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index

// vdu localhost:3000/news/noidung    :slug
router.get('/:slug', newsController.show);

router.get('/', newsController.index);

module.exports = router;
