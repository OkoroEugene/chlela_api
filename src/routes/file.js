"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var fileController_1 = require("../controllers/fileController");
var utility_1 = require("../utility/utility");
var router = express_1.default.Router();
exports.fileRouter = router;
var upload = multer_1.default({ dest: 'uploads/', fileFilter: utility_1.fileFilter });
router.get('/', fileController_1.GetFiles);
router.post('/', upload.single('fileData'), fileController_1.NewFile);
