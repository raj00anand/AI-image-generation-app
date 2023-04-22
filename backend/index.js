import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import generateRoutes from './routes/generateRoutes.js'

// import connectDB from './mongodb/connect';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/generate', generateRoutes);

app.get('/', async(req, res) => {
    res.send("Hello world");
});

const startServer = async () => {

    try {
        connectDB("mongodb+srv://aranandraj02:RTJutFflCp9pdUeu@cluster0.r4qmmru.mongodb.net/?retryWrites=true&w=majority");
        app.listen(3000, () =>
        console.log("server has started at port 3000"));
    } catch (error) {
        console.log(error);
    }

};
startServer();
    

