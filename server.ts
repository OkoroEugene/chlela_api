import express from 'express';
import mongoose from 'mongoose';
import {json} from 'body-parser';
import path from 'path';
import {fileRouter} from './src/routes';

const app = express();
app.use(json());

app.use(express.static("public"));
//app routes
app.use('/api/file', fileRouter);

//connect to DB
mongoose.connect('mongodb://localhost:27017/chlela', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to the database'))

app.listen(5000, () => console.log('Server is connected at 5000'));