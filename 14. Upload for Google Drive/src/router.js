const express = require('express');
const router = express.Router();

// Upload
const multer = require('multer');
const storage = require('./app/middlewares/upload');

const upload = multer({ storage });

// Routes
const UploadController = require('./app/controllers/UploadController');
const CloudStorageController = require('./app/controllers/CloudStorageController');

router.post('/upload', upload.single('file'), UploadController.redirectSendFile);
router.get('/sendFile', CloudStorageController.sendFile);

module.exports = router;