import express from 'express';
import multer from 'multer';
import { GetFiles, NewFile } from '../controllers/fileController';
import {fileFilter} from '../utility/utility';

const router = express.Router();
const upload = multer({ dest: 'uploads/', fileFilter });
// upload.single('fileData')
router.get('/', GetFiles)
router.post('/', NewFile)

export {router as fileRouter};