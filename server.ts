import express from 'express';
import {json} from 'body-parser';
import { fileRouter } from './src/routes';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(json());

app.use(express.static("dist/public"));
//app routes
app.use('/api/file', fileRouter);

app.get('/', (req, res) => res.send('Welcome to chlela!'));

process.on('uncaughtException', (err: any, origin: any) => {
    console.error(err);
    console.log("Node NOT Exiting...");
});

app.listen(PORT, () => console.log(`Server is connected at ${PORT}`));