import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const checkFileExt = /jpeg|jpg|png|gif/;
        const fileExt = checkFileExt.test(path.extname(file.originalname));
        const mineType = checkFileExt.test(file.mimetype);
        if (fileExt && mineType) {
            cb(null, true);
        }
        else {
            cb(new Error('Upload an image please'));
        }
    }
}).single('my_image');
export default upload;
//# sourceMappingURL=multer.js.map