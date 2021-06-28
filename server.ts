import express from 'express';
import mongoose from 'mongoose';
import {json} from 'body-parser';
import path from 'path';
import { fileRouter } from './src/routes';
import fs from 'fs';

const app = express();
app.use(json());

app.use(express.static("public"));
//app routes
app.use('/api/file', fileRouter);

app.get('/', (req, res) => res.send('Welcome to chlela!'));

process.on('uncaughtException', (err: any, origin: any) => {
    console.error(err);
    console.log("Node NOT Exiting...");
});

app.listen(5000, () => console.log('Server is connected at 5000'));