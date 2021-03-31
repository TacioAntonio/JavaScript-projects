const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const archive = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
        const extension = archive.split('.')[1];

        localStorage.setItem('archive', archive);
        localStorage.setItem('extension', extension);

        cb(null, archive);
    }
});

module.exports = storage;