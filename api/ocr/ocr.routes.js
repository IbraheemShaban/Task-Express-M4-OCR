const express = require('express');
const router = express.Router();
const { ocrCreate } = require('./ocr.controllers');
const upload = require('../../middleware/multer');

router.post('/', upload.single('image'), ocrCreate);
// router.post('/', ocrCreate);

module.exports = router;
