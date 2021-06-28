"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
var fileFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|heic|HEIC)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
exports.fileFilter = fileFilter;
