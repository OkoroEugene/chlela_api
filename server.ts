import express from 'express';
import {json} from 'body-parser';
import {postRouter} from './src/routes';

const app = express();
app.use(json());

//app routes
app.use('/api/post', postRouter);

app.listen(3000, () => console.log('Server is connected at 3000'));