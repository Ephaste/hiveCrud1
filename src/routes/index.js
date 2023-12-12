import express from 'express';
import hiveRouter from './hiveRoute';

const mainRouter = express.Router();

mainRouter.use('/hive', hiveRouter);

export  default mainRouter;
