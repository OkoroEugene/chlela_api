import { Request, Response } from "express";
import images from 'images';
import path from 'path';

function GenerateFile(image_path: string) {
    try {
        const frame_path = path.join(__dirname, '../../public/imgs/gold-frame.png');
        const main_path = `imgs/${Date.now()}_final.png`;
        const output_path = path.join(__dirname, `../../public/${main_path}`);

        const frame_canvas = images(frame_path);
        const image_canvas = images(image_path);

        image_canvas
            .size(400)
            .draw(frame_canvas.size(400, image_canvas.height()), 0, 0)
            .save(output_path, {
                quality: 50
            });
        return main_path;
    } catch (error) {
        return null;
    }
}

export default GenerateFile;