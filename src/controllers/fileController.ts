import { Request, Response } from "express";
import fs from 'fs';
import images from 'images';
import Jimp = require('jimp');
import path from 'path';

const GetFiles = async (req: Request, res: Response) => {
    res.send('Got files!');
}

const NewFile = async (req: Request, res: Response) => {
    const frame_path = path.join(__dirname, '../../public/imgs/gold-frame.png');
    const image_path = path.join(__dirname, '../../public/imgs/test1.jpeg');
    const output_path = path.join(__dirname, '../../public/imgs/final.png');

    const frame_canvas = images(frame_path);
    const image_canvas = images(image_path);

    image_canvas
        .size(400)
        .draw(frame_canvas.size(400, image_canvas.height()), 0, 0)
        .save(output_path, {
            quality: 50
        });
    res.send('successful');
}

export {
    GetFiles,
    NewFile,
};