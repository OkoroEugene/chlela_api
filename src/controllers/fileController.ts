import { Request, Response } from "express";
import fs from 'fs';

const GetFiles = async (req: Request, res: Response) => {
    res.send('Got files!');
}

const NewFile = async (req: Request, res: Response) => {
    res.send(req.file);
}

export { 
    GetFiles,
    NewFile,
 };