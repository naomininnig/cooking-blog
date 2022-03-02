const express = require('express');
const router = express.Router();
const recepieController = require('../controllers/recepieController');


/**
 * App routes
 */

router.get('/', recepieController.homepage);





module.exports = router;
