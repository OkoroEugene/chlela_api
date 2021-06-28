import { Request, Response } from "express";
import GenerateFile from '../services/fileService';

const GetFiles = async (req: Request, res: Response) => {
    res.send('Got files!');
}

const NewFile = async (req: Request, res: Response) => {
    if (req.file) {
        const { path } = req.file;

        const output = GenerateFile(path);
        if (output) {
            return res
                .send({
                    data: output,
                    message: 'successssfully framed image'
                });
        }
        return res
            .status(500)
            .send('Something went wrong, please contact admin');
    }
    return res
        .status(500)
        .send('File not found, please input a valid file type');
}

export {
    GetFiles,
    NewFile,
};