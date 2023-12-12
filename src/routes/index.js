import express from 'express';
import hiveRouter from './hiveRoute.js';

const mainRouter = express.Router();

mainRouter.use('/hive', hiveRouter);

export  default mainRouter;
