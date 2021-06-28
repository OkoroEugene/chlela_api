import express from 'express';
import mongoose from 'mongoose';
import {json} from 'body-parser';
import { fileRouter } from './src/routes';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(json());

app.use(express.static("dist/public"));
//app routes
app.use('/api/file', fileRouter);

app.get('/', (req, res) => res.send('Welcome to chlela!'));

//connect to DB
mongoose.connect('mongodb://localhost:27017/chlela', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to the database'))

process.on('uncaughtException', (err: any, origin: any) => {
    console.error(err);
    console.log("Node NOT Exiting...");
});

app.listen(PORT, () => console.log(`Server is connected at ${PORT}`));